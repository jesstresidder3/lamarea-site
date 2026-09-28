import sys, glob
from PIL import Image
pat, out = sys.argv[1], sys.argv[2]
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 5
w = int(sys.argv[4]) if len(sys.argv) > 4 else 260
fs = sorted(glob.glob(pat)); ims = [Image.open(f) for f in fs]
h = int(ims[0].height * w / ims[0].width)
ims = [i.resize((w, h)) for i in ims]; rows = (len(ims) + cols - 1) // cols
s = Image.new('RGB', (w * cols + (cols - 1) * 6, h * rows + (rows - 1) * 6), 'red')
for i, im in enumerate(ims): s.paste(im, ((i % cols) * (w + 6), (i // cols) * (h + 6)))
s.save(out)
