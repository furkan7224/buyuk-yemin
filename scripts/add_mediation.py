#!/usr/bin/env python3
"""cap sync sonrasında çalışır: CapApp-SPM/Package.swift'e AdMob arabulucu
(mediation) adaptörlerini ekler — Unity Ads ve Liftoff Monetize (Vungle).
cap sync bu dosyayı her seferinde yeniden yazdığı için ekleme burada yapılır."""
import pathlib, re, sys

P = pathlib.Path(__file__).resolve().parent.parent / 'ios/App/CapApp-SPM/Package.swift'
ADAPTERS = [
    # (paket adı, depo, sürüm, ürün)
    ('googleads-mobile-ios-mediation-unity',
     'https://github.com/googleads/googleads-mobile-ios-mediation-unity.git', '188967a5c062987496cd276b83dc25e84f87d9a6', 'UnityAdapterTarget'),  # etiket 4.21.000,
    ('googleads-mobile-ios-mediation-liftoffmonetize',
     'https://github.com/googleads/googleads-mobile-ios-mediation-liftoffmonetize.git', '1419a7037b2d18b0b49901edf19b08bdc9297bbf', 'LiftoffMonetizeAdapterTarget'),  # etiket 7.8.000,
]

s = P.read_text()
for name, url, ver, prod in ADAPTERS:
    if url in s:
        continue
    dep = f'        .package(url: "{url}", revision: "{ver}")'
    i = s.index('dependencies: [')
    j = s.index('\n    ],', i)
    s = s[:j] + ',\n' + dep + s[j:]
    n1 = 1
    use = f'                .product(name: "{prod}", package: "{name}")'
    s, n2 = re.subn(r'(\.product\(name: "CapacitorCommunityAdmob", package: "CapacitorCommunityAdmob"\))',
                    lambda m: m.group(1) + ',\n' + use, s, count=1)
    if not (n1 and n2):
        sys.exit(f'Package.swift beklenen biçimde değil, {prod} eklenemedi')
P.write_text(s)
print(s)
