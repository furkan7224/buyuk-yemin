#!/usr/bin/env python3
"""App Store Connect API ile sürüm hazırlama ve incelemeye gönderme.
Kullanım: asc_release.py prepare|submit|status
Ortam: APP_STORE_KEY_ID, APP_STORE_ISSUER_ID, APP_STORE_KEY_PATH, VERSION, APP_ID
"""
import os, sys, time, json, hashlib
import jwt, requests

APP_ID = os.environ.get('APP_ID', '6830630846')
VERSION = os.environ.get('VERSION', '1.1.1')
MARKETING_URL = os.environ.get('MARKETING_URL', 'https://furkan7224.github.io')
BASE = 'https://api.appstoreconnect.apple.com'
MODE = sys.argv[1] if len(sys.argv) > 1 else 'status'

WHATS_NEW = {
    'tr': ("• Altın kalktı: artık tek para birimi var. Paketler oyun parası (₺) veriyor; "
           "ev, araba ve mağazadaki her şey bu parayla alınıyor. Elindeki altın otomatik olarak oyun parasına çevrildi.\n"
           "• Hızlı öğün: tek dokunuşla günün bütün öğünleri, istersen her gün otomatik.\n"
           "• Rütbe ilerlemesi daha dengeli.\n"
           "• Oyunun yazı tipleri artık internetsiz de görünüyor.\n"
           "• Reklam ve küçük hata düzeltmeleri."),
    'en-US': ("• Gold is gone: there is now a single currency. Packs give in-game cash, "
              "which buys homes, cars and everything in the store. Your gold was converted automatically.\n"
              "• Quick meals: plan the whole day with one tap, or let it happen automatically.\n"
              "• Better-balanced rank progression.\n"
              "• The game's fonts now work offline too.\n"
              "• Ad and minor bug fixes."),
}
IAP_TEXT = {
    'altin_kucuk': {'ref': '50.000 TL Oyun Parasi',
                    'tr': ('50.000 ₺ Oyun Parası', 'Kariyerinde harcamak için 50.000 ₺ oyun parası'),
                    'en-US': ('50,000 ₺ In-Game Cash', '50,000 ₺ of in-game cash for your career')},
    'altin_buyuk': {'ref': '150.000 TL Oyun Parasi',
                    'tr': ('150.000 ₺ Oyun Parası', 'Kariyerinde harcamak için 150.000 ₺ oyun parası'),
                    'en-US': ('150,000 ₺ In-Game Cash', '150,000 ₺ of in-game cash for your career')},
}
IAP_NOTE = ('Open the app > main menu > "Mağaza ve Premium" (Store and Premium), or tap the crown icon in the top bar during a career. '
            'Cash packs are consumable and add in-game currency (₺) to the active career; it is spent on homes, cars and items in the '
            '"Oyun parasıyla al" (Buy with cash) tab. If no career is active, the cash is held and added when a career starts.')
SHOT = os.environ.get('IAP_SHOT', 'magaza-paketi/iap/oyun-parasi.png')


def token():
    key = open(os.environ['APP_STORE_KEY_PATH']).read()
    now = int(time.time())
    return jwt.encode({'iss': os.environ['APP_STORE_ISSUER_ID'], 'iat': now, 'exp': now + 1100, 'aud': 'appstoreconnect-v1'},
                      key, algorithm='ES256', headers={'kid': os.environ['APP_STORE_KEY_ID'], 'typ': 'JWT'})


S = requests.Session()


def call(method, path, body=None, ok=(200, 201, 204)):
    url = path if path.startswith('http') else BASE + path
    r = S.request(method, url, json=body, headers={'Authorization': 'Bearer ' + token(), 'Content-Type': 'application/json'})
    if r.status_code not in ok:
        print('HATA', method, path, r.status_code, r.text[:1500])
        raise SystemExit(1)
    return r.json() if r.text else {}


def log(*a):
    print('•', *a, flush=True)


def find_build():
    r = call('GET', f'/v1/builds?filter[app]={APP_ID}&filter[preReleaseVersion.version]={VERSION}&sort=-uploadedDate&limit=5')
    bs = [b for b in r['data'] if b['attributes']['processingState'] == 'VALID']
    if not bs:
        log('Geçerli yapı yok:', [(b['attributes']['version'], b['attributes']['processingState']) for b in r['data']])
        raise SystemExit(1)
    b = bs[0]
    log('Yapı', VERSION, '(', b['attributes']['version'], ')', b['id'])
    if b['attributes'].get('usesNonExemptEncryption') is None:
        call('PATCH', f"/v1/builds/{b['id']}", {'data': {'type': 'builds', 'id': b['id'], 'attributes': {'usesNonExemptEncryption': False}}})
        log('Şifreleme beyanı: yok (muaf)')
    return b


def find_or_create_version():
    r = call('GET', f'/v1/apps/{APP_ID}/appStoreVersions?filter[platform]=IOS&limit=10')
    for v in r['data']:
        if v['attributes']['versionString'] == VERSION:
            log('Sürüm mevcut', VERSION, v['attributes']['appStoreState'])
            return v
    for v in r['data']:
        st = v['attributes']['appStoreState']
        if st in ('PREPARE_FOR_SUBMISSION', 'DEVELOPER_REJECTED', 'REJECTED', 'METADATA_REJECTED'):
            log('Düzenlenebilir sürüm', v['attributes']['versionString'], st, '->', VERSION)
            return call('PATCH', f"/v1/appStoreVersions/{v['id']}", {'data': {'type': 'appStoreVersions', 'id': v['id'], 'attributes': {'versionString': VERSION}}})['data']
    v = call('POST', '/v1/appStoreVersions', {'data': {'type': 'appStoreVersions', 'attributes': {'platform': 'IOS', 'versionString': VERSION, 'releaseType': 'MANUAL'},
                                                        'relationships': {'app': {'data': {'type': 'apps', 'id': APP_ID}}}}})['data']
    log('Sürüm oluşturuldu', VERSION)
    return v


def prepare():
    b = find_build()
    v = find_or_create_version()
    vid = v['id']
    call('PATCH', f'/v1/appStoreVersions/{vid}', {'data': {'type': 'appStoreVersions', 'id': vid, 'attributes': {'releaseType': 'MANUAL'}}})
    log('Yayın: elle (onaydan sonra sen yayınlarsın)')
    call('PATCH', f'/v1/appStoreVersions/{vid}/relationships/build', {'data': {'type': 'builds', 'id': b['id']}})
    log('Yapı sürüme bağlandı')
    locs = call('GET', f'/v1/appStoreVersions/{vid}/appStoreVersionLocalizations')['data']
    for l in locs:
        loc = l['attributes']['locale']
        attrs = {'marketingUrl': MARKETING_URL}
        if loc in WHATS_NEW:
            attrs['whatsNew'] = WHATS_NEW[loc]
        call('PATCH', f"/v1/appStoreVersionLocalizations/{l['id']}", {'data': {'type': 'appStoreVersionLocalizations', 'id': l['id'], 'attributes': attrs}})
        log('Metinler güncellendi:', loc)
    # satın alma ürünleri
    iaps = call('GET', f'/v1/apps/{APP_ID}/inAppPurchasesV2?limit=50')['data']
    for p in iaps:
        pid = p['attributes']['productId'].split('.')[-1]
        if pid not in IAP_TEXT:
            continue
        t = IAP_TEXT[pid]
        call('PATCH', f"/v2/inAppPurchases/{p['id']}", {'data': {'type': 'inAppPurchases', 'id': p['id'], 'attributes': {'name': t['ref'], 'reviewNote': IAP_NOTE}}})
        def locs():
            return call('GET', f"/v2/inAppPurchases/{p['id']}/inAppPurchaseLocalizations?limit=20")['data']
        ls = locs()
        if not any(x['attributes'].get('state') != 'APPROVED' for x in ls):
            loc0 = 'en-US'; nm, ds = t[loc0]
            call('POST', '/v1/inAppPurchaseLocalizations', {'data': {'type': 'inAppPurchaseLocalizations', 'attributes': {'locale': loc0, 'name': nm, 'description': ds},
                  'relationships': {'inAppPurchaseV2': {'data': {'type': 'inAppPurchases', 'id': p['id']}}}}}, ok=(200, 201, 409))
            ls = locs()
        for l in ls:
            loc = l['attributes']['locale']
            if loc not in t or l['attributes'].get('state') == 'APPROVED':
                continue
            nm, ds = t[loc]
            if l['attributes'].get('name') == nm and l['attributes'].get('description') == ds:
                continue
            call('PATCH', f"/v1/inAppPurchaseLocalizations/{l['id']}", {'data': {'type': 'inAppPurchaseLocalizations', 'id': l['id'], 'attributes': {'name': nm, 'description': ds}}})
        log('Metinler', pid, [(x['attributes']['locale'], x['attributes'].get('state'), x['attributes'].get('name')) for x in locs()])
        upload_shot(p['id'])
        log('Ürün güncellendi:', pid, '->', t['tr'][0], '| durum', p['attributes']['state'])


def upload_shot(iap_id):
    data = open(SHOT, 'rb').read()
    old = call('GET', f'/v2/inAppPurchases/{iap_id}/appStoreReviewScreenshot', ok=(200, 404))
    if old.get('data'):
        call('DELETE', f"/v1/inAppPurchaseAppStoreReviewScreenshots/{old['data']['id']}")
    r = call('POST', '/v1/inAppPurchaseAppStoreReviewScreenshots', {'data': {'type': 'inAppPurchaseAppStoreReviewScreenshots',
          'attributes': {'fileName': os.path.basename(SHOT), 'fileSize': len(data)},
          'relationships': {'inAppPurchaseV2': {'data': {'type': 'inAppPurchases', 'id': iap_id}}}}})['data']
    for op in r['attributes']['uploadOperations']:
        chunk = data[op['offset']:op['offset'] + op['length']]
        hdr = {h['name']: h['value'] for h in op['requestHeaders']}
        q = requests.request(op['method'], op['url'], data=chunk, headers=hdr)
        if q.status_code >= 300:
            print('Yükleme hatası', q.status_code, q.text[:300]); raise SystemExit(1)
    call('PATCH', f"/v1/inAppPurchaseAppStoreReviewScreenshots/{r['id']}", {'data': {'type': 'inAppPurchaseAppStoreReviewScreenshots', 'id': r['id'],
          'attributes': {'uploaded': True, 'sourceFileChecksum': hashlib.md5(data).hexdigest()}}})


def status():
    r = call('GET', f'/v1/apps/{APP_ID}/appStoreVersions?filter[platform]=IOS&limit=5')
    for v in r['data']:
        log('Sürüm', v['attributes']['versionString'], v['attributes']['appStoreState'], v['attributes'].get('releaseType'))
    iaps = call('GET', f'/v1/apps/{APP_ID}/inAppPurchasesV2?limit=50')['data']
    for p in iaps:
        log('Ürün', p['attributes']['productId'].split('.')[-1], p['attributes']['name'], p['attributes']['state'])
    subs = call('GET', f'/v1/reviewSubmissions?filter[app]={APP_ID}&limit=5')['data']
    for s in subs:
        log('İnceleme kaydı', s['id'], s['attributes'].get('state'), s['attributes'].get('submittedDate'))


def submit():
    prepare()
    v = find_or_create_version()
    # açık taslak inceleme kaydı varsa onu kullan
    subs = call('GET', f'/v1/reviewSubmissions?filter[app]={APP_ID}&filter[platform]=IOS&filter[state]=READY_FOR_REVIEW&limit=5')['data']
    if subs:
        sid = subs[0]['id']; log('Taslak inceleme kaydı kullanılıyor', sid)
    else:
        sid = call('POST', '/v1/reviewSubmissions', {'data': {'type': 'reviewSubmissions', 'attributes': {'platform': 'IOS'},
                    'relationships': {'app': {'data': {'type': 'apps', 'id': APP_ID}}}}})['data']['id']
        log('İnceleme kaydı oluşturuldu', sid)
    items = call('GET', f'/v1/reviewSubmissions/{sid}/items')['data']
    have_v = any(i.get('relationships', {}).get('appStoreVersion', {}).get('data') for i in items)
    if not have_v:
        call('POST', '/v1/reviewSubmissionItems', {'data': {'type': 'reviewSubmissionItems',
              'relationships': {'reviewSubmission': {'data': {'type': 'reviewSubmissions', 'id': sid}},
                                'appStoreVersion': {'data': {'type': 'appStoreVersions', 'id': v['id']}}}}})
        log('Sürüm inceleme kaydına eklendi')
    # değişen satın alma ürünleri: onaylı ürün metni değiştiyse ayrıca gönderilir
    iaps = call('GET', f'/v1/apps/{APP_ID}/inAppPurchasesV2?limit=50')['data']
    for p in iaps:
        pid = p['attributes']['productId'].split('.')[-1]
        if pid in IAP_TEXT:
            r = S.request('POST', BASE + '/v1/inAppPurchaseSubmissions', json={'data': {'type': 'inAppPurchaseSubmissions',
                  'relationships': {'inAppPurchaseV2': {'data': {'type': 'inAppPurchases', 'id': p['id']}}}}}, headers={'Authorization': 'Bearer ' + token(), 'Content-Type': 'application/json'})
            log('Ürün gönderimi:', pid, r.status_code, r.text[:300].replace(chr(10), ' '))
    call('PATCH', f'/v1/reviewSubmissions/{sid}', {'data': {'type': 'reviewSubmissions', 'id': sid, 'attributes': {'submitted': True}}})
    log('GÖNDERİLDİ: sürüm', VERSION, 'Apple incelemesine gitti')
    status()


def iapinfo():
    iaps = call('GET', f'/v1/apps/{APP_ID}/inAppPurchasesV2?limit=50')['data']
    for p in iaps:
        pid = p['attributes']['productId'].split('.')[-1]
        if pid not in IAP_TEXT: continue
        ls = call('GET', f"/v2/inAppPurchases/{p['id']}/inAppPurchaseLocalizations?limit=20")['data']
        log(pid, p['attributes']['state'], json.dumps([(x['id'][:8], x['attributes']) for x in ls], ensure_ascii=False))

{'prepare': prepare, 'submit': submit, 'status': status, 'iapinfo': iapinfo}[MODE]()
