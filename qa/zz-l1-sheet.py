import sys, glob
from PIL import Image, ImageDraw
prefix, out, cols = sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 4
files = sorted(glob.glob(prefix + '-*.png'))
start = int(sys.argv[4]) if len(sys.argv) > 4 else 0
end = int(sys.argv[5]) if len(sys.argv) > 5 else len(files)
files = files[start:end]
ims = [Image.open(f) for f in files]
w = 600 if ims[0].width > 800 else 260
scaled = [im.resize((w, int(im.height * w / im.width))) for im in ims]
h = max(i.height for i in scaled)
rows = (len(scaled) + cols - 1) // cols
sheet = Image.new('RGB', (cols * (w + 8), rows * (h + 24)), 'white')
d = ImageDraw.Draw(sheet)
for k, im in enumerate(scaled):
    x, y = (k % cols) * (w + 8), (k // cols) * (h + 24)
    sheet.paste(im, (x, y + 20))
    d.text((x + 4, y + 4), files[k].split('/')[-1], fill='black')
sheet.save(out, quality=82)
