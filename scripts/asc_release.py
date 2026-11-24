#!/usr/bin/env python3
"""App Store Connect API ile sürüm hazırlama ve incelemeye gönderme.
Kullanım: asc_release.py prepare|submit|status
Ortam: APP_STORE_KEY_ID, APP_STORE_ISSUER_ID, APP_STORE_KEY_PATH, VERSION, APP_ID
"""
import os, sys, time, json, hashlib
import jwt, requests

APP_ID = os.environ.get('APP_ID', '6830630846')
VERSION = os.environ.get('VERSION', '1.1.4')
MARKETING_URL = os.environ.get('MARKETING_URL', 'https://furkan7224.github.io')
BASE = 'https://api.appstoreconnect.apple.com'
MODE = sys.argv[1] if len(sys.argv) > 1 else 'status'

WHATS_NEW = {
    'tr': ("• Günlük ödül: Her gün gir, 7 günlük seriyi tamamla, büyük ödülü al. Premium sahipleri 2 katını alır.\n"
           "• Yeni askerlere özel Acemi Paketi: oyun parası, 3 gün reklamsız oyun ve 3 gün 2 kat tecrübe.\n"
           "• Mağazada Ücretsiz ve Premium karşılaştırması: Premium'un neler kazandırdığını tek bakışta gör.\n"
           "• Küçük iyileştirmeler ve hata düzeltmeleri."),
    'en-US': ("• Daily reward: log in every day, complete the 7-day streak and claim the big prize. Premium owners get double.\n"
              "• New Recruit Pack for new players: in-game cash, 3 days ad-free and 3 days of double experience.\n"
              "• Free vs Premium comparison in the store: see everything Premium gives you at a glance.\n"
              "• Minor improvements and bug fixes."),
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
    call('PATCH', f'/v1/appStoreVersions/{vid}', {'data': {'type': 'appStoreVersions', 'id': vid, 'attributes': {'releaseType': os.environ.get('RELEASE_TYPE', 'MANUAL')}}})
    log('Yayın türü:', os.environ.get('RELEASE_TYPE', 'MANUAL'))
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


def withdraw():
    """Bekleyen incelemeyi geri çeker (sürüm silinmez, yayındaki sürüm etkilenmez)."""
    subs = call('GET', f'/v1/reviewSubmissions?filter[app]={APP_ID}&filter[platform]=IOS&limit=10')['data']
    act = [x for x in subs if x['attributes'].get('state') in ('WAITING_FOR_REVIEW', 'IN_REVIEW', 'UNRESOLVED_ISSUES')]
    for x in act:
        call('PATCH', f"/v1/reviewSubmissions/{x['id']}", {'data': {'type': 'reviewSubmissions', 'id': x['id'], 'attributes': {'canceled': True}}})
        log('İnceleme geri çekiliyor', x['id'], x['attributes'].get('state'))
    for _ in range(40):
        subs = call('GET', f'/v1/reviewSubmissions?filter[app]={APP_ID}&filter[platform]=IOS&limit=10')['data']
        if not any(x['attributes'].get('state') in ('WAITING_FOR_REVIEW', 'IN_REVIEW', 'CANCELING') for x in subs):
            break
        time.sleep(15)
    log('Geri çekme tamam')
    status()


def resubmit():
    """Yeni yapı işlenince: eski incelemeyi geri çek, yeni yapıyı bağla, tekrar gönder."""
    r = call('GET', f'/v1/apps/{APP_ID}/appStoreVersions?filter[platform]=IOS&filter[versionString]={VERSION}&limit=1')['data']
    cur = None
    if r:
        bb = call('GET', f"/v1/appStoreVersions/{r[0]['id']}/build")['data']
        cur = int(bb['attributes']['version']) if bb else None
    log('Şu an bağlı yapı:', cur)
    q0 = call('GET', f'/v1/builds?filter[app]={APP_ID}&filter[preReleaseVersion.version]={VERSION}&sort=-uploadedDate&limit=10')['data']
    hi = max([int(b['attributes']['version']) for b in q0] or [0])
    cur = max(cur or 0, hi)
    log('Bundan yeni yapı beklenecek:', cur)
    for _ in range(170):
        q = call('GET', f'/v1/builds?filter[app]={APP_ID}&filter[preReleaseVersion.version]={VERSION}&sort=-uploadedDate&limit=5')['data']
        ok = [b for b in q if b['attributes']['processingState'] == 'VALID' and (cur is None or int(b['attributes']['version']) > cur)]
        if ok:
            log('Yeni yapı hazır:', ok[0]['attributes']['version']); break
        log('Yeni yapı bekleniyor...', [(b['attributes']['version'], b['attributes']['processingState']) for b in q])
        time.sleep(30)
    else:
        raise SystemExit('Yeni yapı gelmedi')
    withdraw()
    submit()


def release():
    """Onaylanmış (PENDING_DEVELOPER_RELEASE) sürümü yayınlar."""
    r = call('GET', f'/v1/apps/{APP_ID}/appStoreVersions?filter[platform]=IOS&filter[versionString]={VERSION}&limit=1')['data']
    if not r: raise SystemExit('Sürüm yok')
    v = r[0]; st = v['attributes'].get('appStoreState')
    log('Sürüm durumu:', st)
    if st != 'PENDING_DEVELOPER_RELEASE': raise SystemExit('Yayına hazır değil: ' + str(st))
    call('POST', '/v1/appStoreVersionReleaseRequests', {'data': {'type': 'appStoreVersionReleaseRequests', 'relationships': {'appStoreVersion': {'data': {'type': 'appStoreVersions', 'id': v['id']}}}}})
    log('YAYINLANDI: yayın isteği gönderildi')
    time.sleep(10); status()


def ship():
    """Yeni yapı işlenene kadar bekle, sürümü hazırla ve incelemeye gönder."""
    for _ in range(170):
        r = call('GET', f'/v1/builds?filter[app]={APP_ID}&filter[preReleaseVersion.version]={VERSION}&sort=-uploadedDate&limit=5')['data']
        if any(b['attributes']['processingState'] == 'VALID' for b in r):
            break
        log('Yapı bekleniyor...', [(b['attributes']['version'], b['attributes']['processingState']) for b in r])
        time.sleep(30)
    else:
        raise SystemExit('Yapı gelmedi')
    prepare()
    submit()


def swap():
    """İncelemedeki eski sürümü geri çek, aynı kaydı VERSION'a çevirip yeni yapıyla gönder."""
    withdraw()
    ship()


NEW_IAP = {
    'acemi': {'ref': 'Acemi Paketi', 'type': 'NON_CONSUMABLE', 'price': '49.99',
              'note': ('Recruit Pack (one-time, non-consumable). Shown at the top of the store ("Mağaza ve Premium" from the main menu, or the crown icon '
                       'in the top bar) during the first 3 days after install, and as a banner on the Headquarters screen. It grants 75,000 ₺ in-game cash, '
                       '3 days without ads and 3 days of double experience. It can be restored with "Satın alımları geri yükle".'),
              'shot': 'magaza-paketi/iap/acemi.png',
              'loc': {'tr': ('Acemi Paketi', '75.000 ₺ oyun parası, 3 gün reklamsız, 2x XP'),
                      'en-US': ('Recruit Pack', '₺75,000 cash, 3 days ad-free and 2x XP'),
                      'ja': ('新兵パック', 'ゲーム内マネー75,000₺、3日間広告なし、経験値2倍'),
                      'es-ES': ('Pack de Recluta', '75.000 ₺, 3 días sin anuncios y XP x2'),
                      'fr-FR': ('Pack Recrue', '75 000 ₺, 3 jours sans pub et XP x2'),
                      'de-DE': ('Rekrutenpaket', '75.000 ₺, 3 Tage werbefrei und 2x EP')}},
}


def iapnew():
    key = os.environ.get('IAP_KEY', 'acemi'); cfg = NEW_IAP[key]
    pid_full = 'com.gulergamestudios.buyukyemin.' + key
    iaps = call('GET', f'/v1/apps/{APP_ID}/inAppPurchasesV2?limit=50')['data']
    ex = [p for p in iaps if p['attributes']['productId'] == pid_full]
    if ex:
        iid = ex[0]['id']; log('Ürün zaten var:', key, ex[0]['attributes']['state'])
    else:
        iid = call('POST', '/v2/inAppPurchases', {'data': {'type': 'inAppPurchases', 'attributes': {
            'name': cfg['ref'], 'productId': pid_full, 'inAppPurchaseType': cfg['type'], 'reviewNote': cfg['note'], 'familySharable': False},
            'relationships': {'app': {'data': {'type': 'apps', 'id': APP_ID}}}}})['data']['id']
        log('Ürün oluşturuldu:', key, iid)
    # yerelleştirmeler
    have = {l['attributes']['locale']: l for l in call('GET', f'/v2/inAppPurchases/{iid}/inAppPurchaseLocalizations?limit=20')['data']}
    for loc, (nm, ds) in cfg['loc'].items():
        if loc in have:
            call('PATCH', f"/v1/inAppPurchaseLocalizations/{have[loc]['id']}", {'data': {'type': 'inAppPurchaseLocalizations', 'id': have[loc]['id'], 'attributes': {'name': nm, 'description': ds}}})
        else:
            call('POST', '/v1/inAppPurchaseLocalizations', {'data': {'type': 'inAppPurchaseLocalizations', 'attributes': {'locale': loc, 'name': nm, 'description': ds},
                  'relationships': {'inAppPurchaseV2': {'data': {'type': 'inAppPurchases', 'id': iid}}}}}, ok=(200, 201, 409))
    log('Yerelleştirmeler tamam')
    # fiyat (Türkiye taban)
    pp = None; url = f'/v2/inAppPurchases/{iid}/pricePoints?filter[territory]=TUR&limit=200'
    while url and not pp:
        r = call('GET', url)
        for x in r['data']:
            if x['attributes'].get('customerPrice') == cfg['price']: pp = x['id']; break
        nxt = r.get('links', {}).get('next'); url = nxt.replace(BASE, '') if nxt else None
    if not pp: log('Fiyat noktası bulunamadı', cfg['price']); raise SystemExit(1)
    call('POST', '/v1/inAppPurchasePriceSchedules', {'data': {'type': 'inAppPurchasePriceSchedules', 'relationships': {
        'inAppPurchase': {'data': {'type': 'inAppPurchases', 'id': iid}}, 'baseTerritory': {'data': {'type': 'territories', 'id': 'TUR'}},
        'manualPrices': {'data': [{'type': 'inAppPurchasePrices', 'id': '${p1}'}]}}},
        'included': [{'type': 'inAppPurchasePrices', 'id': '${p1}', 'attributes': {'startDate': None},
                      'relationships': {'inAppPurchasePricePoint': {'data': {'type': 'inAppPurchasePricePoints', 'id': pp}}}}]}, ok=(200, 201, 409))
    log('Fiyat ayarlandı: TRY', cfg['price'])
    # ülkeler
    terr = []; url = '/v1/territories?limit=200'
    while url:
        r = call('GET', url); terr += [{'type': 'territories', 'id': t['id']} for t in r['data']]
        nxt = r.get('links', {}).get('next'); url = nxt.replace(BASE, '') if nxt else None
    call('POST', '/v1/inAppPurchaseAvailabilities', {'data': {'type': 'inAppPurchaseAvailabilities', 'attributes': {'availableInNewTerritories': True},
          'relationships': {'inAppPurchase': {'data': {'type': 'inAppPurchases', 'id': iid}}, 'availableTerritories': {'data': terr}}}}, ok=(200, 201, 409))
    log('Satış ülkeleri:', len(terr))
    global SHOT
    SHOT = cfg['shot']; upload_shot(iid); log('İnceleme görseli yüklendi')
    if os.environ.get('IAP_SUBMIT', '1') == '1':
        r = call('POST', '/v1/inAppPurchaseSubmissions', {'data': {'type': 'inAppPurchaseSubmissions', 'relationships': {'inAppPurchaseV2': {'data': {'type': 'inAppPurchases', 'id': iid}}}}}, ok=(200, 201, 409))
        log('İncelemeye gönderildi' if r else 'Gönderim yanıtı boş')
    st = call('GET', f'/v2/inAppPurchases/{iid}')['data']['attributes']['state']; log('Ürün durumu:', st)


def iapinfo():
    iaps = call('GET', f'/v1/apps/{APP_ID}/inAppPurchasesV2?limit=50')['data']
    for p in iaps:
        pid = p['attributes']['productId'].split('.')[-1]
        if pid not in IAP_TEXT: continue
        ls = call('GET', f"/v2/inAppPurchases/{p['id']}/inAppPurchaseLocalizations?limit=20")['data']
        log(pid, p['attributes']['state'], json.dumps([(x['id'][:8], x['attributes']) for x in ls], ensure_ascii=False))

{'prepare': prepare, 'submit': submit, 'status': status, 'iapinfo': iapinfo, 'withdraw': withdraw, 'resubmit': resubmit, 'release': release, 'ship': ship, 'swap': swap, 'iapnew': iapnew}[MODE]()
