# Design reviewer contact sheets. Usage: python3 qa/design-sheet.py out.jpg cols img...  (max 12 tiles per sheet: out.N.jpg)
import sys
from PIL import Image
out=sys.argv[1]; cols=int(sys.argv[2]); files=sys.argv[3:]
per=cols*3 if cols<6 else cols*2
for s in range(0,len(files),per):
    ims=[Image.open(f).convert('RGB') for f in files[s:s+per]]
    tw=1600//cols; th=int(ims[0].height*tw/ims[0].width)
    rows=(len(ims)+cols-1)//cols
    sheet=Image.new('RGB',(cols*tw+(cols-1)*6,rows*th+(rows-1)*6),(40,40,40))
    for i,im in enumerate(ims):
        sheet.paste(im.resize((tw,th)),((i%cols)*(tw+6),(i//cols)*(th+6)))
    sheet.save(out.replace('.jpg',f'.{s//per}.jpg'),quality=82)
