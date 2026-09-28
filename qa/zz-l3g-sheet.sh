#!/bin/bash
# zz-l3g-sheet.sh <path> <width>: stepped shots (one screen per step) and a contact sheet
cd /Users/jesstresidder/dev/lamarea-site/qa
p="$1"; w="$2"; n=$(echo "$p" | tr / - | sed 's/^-//'); [ -z "$n" ] && n=home
d=shots/rebuild/l3g/steps; mkdir -p $d
st=$([ "$w" -lt 800 ] && echo 800 || echo 860)
rm -f $d/$n-$w-*.png
node zz-l1-steps.mjs "$p" $d/$n-$w $w $st >/dev/null
python3 - "$d" "$n-$w" "$w" <<'PY'
import sys,glob
from PIL import Image
d,pre,w=sys.argv[1],sys.argv[2],int(sys.argv[3])
fs=sorted(glob.glob(f"{d}/{pre}-[0-9][0-9][0-9].png"))
ims=[Image.open(f) for f in fs]
cols=6 if w<800 else 3
sc=0.5 if w<800 else 0.36
tw,th=int(ims[0].width*sc),int(ims[0].height*sc)
rows=(len(ims)+cols-1)//cols
sheet=Image.new('RGB',(cols*tw+(cols-1)*8,rows*th+(rows-1)*8),'white')
for i,im in enumerate(ims):
  sheet.paste(im.resize((tw,th)),((i%cols)*(tw+8),(i//cols)*(th+8)))
sheet.save(f"{d}/../sheet-{pre}.png"); print(f"{d}/../sheet-{pre}.png",len(ims))
PY
