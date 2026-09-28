import sys
from PIL import Image
# usage: zz-grid.py out cols width img...
out, cols, tw = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
ims = [Image.open(f).convert('RGB') for f in sys.argv[4:]]
ims = [i.resize((tw, int(i.height * tw / i.width))) for i in ims]
h = max(i.height for i in ims)
rows = (len(ims) + cols - 1) // cols
g = Image.new('RGB', (cols * tw + (cols-1)*6, rows * h + (rows-1)*6), 'white')
for k, i in enumerate(ims):
    g.paste(i, ((k % cols) * (tw+6), (k // cols) * (h+6)))
g.save(out, quality=70)
