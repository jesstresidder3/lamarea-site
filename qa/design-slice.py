# Usage: python3 qa/slice.py <png> [chunk_px=1800] [scale_width=1000]  -> writes <png>.partN.jpg
import sys
from PIL import Image
Image.MAX_IMAGE_PIXELS=None
src=sys.argv[1]; ch=int(sys.argv[2]) if len(sys.argv)>2 else 1800; sw=int(sys.argv[3]) if len(sys.argv)>3 else 1000
im=Image.open(src).convert('RGB'); w,h=im.size
n=0
for y in range(0,h,ch):
    part=im.crop((0,y,w,min(h,y+ch)))
    if w>sw: part=part.resize((sw,int(part.height*sw/w)))
    part.save(f"{src[:-4]}.p{n}.jpg",quality=80); n+=1
print(src,w,h,n)
