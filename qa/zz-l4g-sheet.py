# Contact sheet: python3 qa/zz-l4g-sheet.py out.png cols scale files...
import sys
from PIL import Image
out, cols, scale = sys.argv[1], int(sys.argv[2]), float(sys.argv[3])
ims = [Image.open(f) for f in sys.argv[4:]]
w, h = int(ims[0].width*scale), int(ims[0].height*scale)
rows = (len(ims)+cols-1)//cols
S = Image.new('RGB', (cols*w + (cols-1)*8, rows*h + (rows-1)*8), 'red')
for i, im in enumerate(ims):
    S.paste(im.resize((w, h)), ((i%cols)*(w+8), (i//cols)*(h+8)))
S.save(out)
