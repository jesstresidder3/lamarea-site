# Usage: python3 qa/sheet.py out.jpg cols tileW img1 img2 ...  -> contact sheet with index labels
import sys
from PIL import Image, ImageDraw
out, cols, tw = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]); files = sys.argv[4:]
ims = [Image.open(f).convert('RGB') for f in files]
th = int(ims[0].height * tw / ims[0].width)
rows = (len(ims) + cols - 1) // cols
sheet = Image.new('RGB', (cols * (tw + 6), rows * (th + 6)), 'white')
d = ImageDraw.Draw(sheet)
for i, im in enumerate(ims):
    x, y = (i % cols) * (tw + 6), (i // cols) * (th + 6)
    sheet.paste(im.resize((tw, int(im.height * tw / im.width))), (x, y))
    d.rectangle([x, y, x + 22, y + 14], fill='black'); d.text((x + 3, y + 2), str(i), fill='white')
sheet.save(out, quality=80)
