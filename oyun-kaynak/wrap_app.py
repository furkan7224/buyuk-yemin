import sys
src=open('demir-yemin.html').read()
lines=src.split('\n')
# drop claude-only meta
lines=[l for l in lines if 'claude:viewport-fit-sides' not in l]
src='\n'.join(lines)
head='<!doctype html>\n<html lang="tr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">\n<script src="ads.js"></script>\n<script src="iap.js"></script>\n'
i=src.index('<div id="app"></div>')
mid='<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}</style>\n</head>\n<body>\n\n'
out=head+src[:i]+mid+src[i:].rstrip('\n')+'\n</body>\n</html>\n'
open(sys.argv[1],'w').write(out)
