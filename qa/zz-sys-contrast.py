import json, sys, re
from PIL import Image
d = sys.argv[1]
def lum(c):
    def ch(v):
        v /= 255
        return v/12.92 if v <= 0.03928 else ((v+0.055)/1.055)**2.4
    r,g,b = c[:3]; return 0.2126*ch(r)+0.7152*ch(g)+0.0722*ch(b)
items = json.load(open(f'{d}/items.json'))
for it in items:
    m = re.findall(r'[\d.]+', it['color']); tc = tuple(float(x) for x in m[:3])
    im = Image.open(f"{d}/{it['i']}.png").convert('RGB')
    px = sorted(lum(p) for p in im.getdata())
    lt = lum(tc)
    worst = px[int(len(px)*0.02)] if lt > 0.5 else px[int(len(px)*0.98)-1]
    cr = (max(lt, worst)+0.05)/(min(lt, worst)+0.05)
    need = 3 if it['size'] >= 24 else 4.5
    print(f"{'PASS' if cr >= need else 'FAIL'} {cr:5.2f} need {need} size {it['size']:.0f} {it['cls']}")
