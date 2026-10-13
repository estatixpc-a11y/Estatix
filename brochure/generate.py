from pathlib import Path
import json, html, shutil
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from PIL import Image
from io import BytesIO
root=Path(__file__).resolve().parent.parent
brochure_dir=Path(__file__).resolve().parent
asset_dir=root/'public/assets' if (root/'public/assets').exists() else brochure_dir/'assets'
out=asset_dir/'brochure' if (root/'public/assets').exists() else brochure_dir/'pdf'
out.mkdir(parents=True,exist_ok=True)
pages=json.loads((brochure_dir/'content.json').read_text())
(brochure_dir).mkdir(exist_ok=True)
# Preserve editable content.json.
W,H=A4; M=44; CW=W-2*M; teal=HexColor('#051d26'); muted=HexColor('#475569'); accent=HexColor('#a68a51'); paper=HexColor('#f7f5f0')
styles={ 'intro':ParagraphStyle('intro',fontName='Helvetica',fontSize=12,leading=18,textColor=muted), 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=10.5,leading=16,textColor=muted), 'label':ParagraphStyle('label',fontName='Helvetica-Bold',fontSize=9,leading=13,textColor=teal)}
def para(c,text,x,y,w,kind='body'):
 p=Paragraph(html.escape(text).replace('\n','<br/>'),styles[kind]); pw,ph=p.wrap(w,H);p.drawOn(c,x,y-ph);return y-ph

def img(c,rel,x,y,w,h):
 path=asset_dir/rel
 im=Image.open(path); im=im if rel.startswith('logo/') else im.convert('RGB'); im.thumbnail((int(w/72*240),int(h/72*240))); iw,ih=im.size; scale=min(w/iw,h/ih);dw,dh=iw*scale,ih*scale
 c.setFillColor(teal if rel.startswith('logo/') else HexColor('#eceeea'));c.rect(x,y-h,w,h,fill=1,stroke=0)
 buffer=BytesIO(); im.save(buffer,format='PNG' if rel.startswith('logo/') else 'JPEG',quality=92); buffer.seek(0)
 c.drawImage(ImageReader(buffer),x+(w-dw)/2,y-h+(h-dh)/2,dw,dh,mask='auto')

def build(dest):
 c=canvas.Canvas(str(dest),pagesize=A4);c.setTitle('Estatix | From Land to Lasting Value');c.setAuthor('Estatix Property Consultants LLP')
 for i,p in enumerate(pages):
  c.setFillColor(paper);c.rect(0,0,W,H,fill=1,stroke=0)
  c.setFillColor(teal);c.rect(0,H-20,W,20,fill=1,stroke=0)
  c.setFont('Helvetica-Bold',9);c.setFillColor(accent);c.drawString(M,H-56,p['label'])
  y=H-93;c.setFont('Helvetica-Bold',30);c.setFillColor(teal)
  for line in p['title'].split('\n'): c.drawString(M,y,line);y-=36
  y-=6
  y=para(c,p.get('intro',''),M,y,CW,'intro')-25
  if i==0:
   img(c,'logo/estatix-logo-white.png',M,y,CW,90);y-=112
  if p.get('portraits'):
   for j,(name,rel) in enumerate([('Adarsh Chouksey','team/adarsh-chouksey.png'),('Kevin John','team/kevin-john.png')]):
    x=M+j*(CW/2+8);img(c,rel,x,y,CW/2-8,155);para(c,name,x,y-169,CW/2-8,'label')
   y-=210
  if p.get('image'):
   height=200 if i in [0,3,5,9,10] else 160
   img(c,p['image'],M,y,CW,height);y-=height+12
   y=para(c,p.get('caption',''),M,y,CW,'body')-21
  if p.get('dual'):
   for j,rel in enumerate(['projects/ekaant-render.png','projects/eminence-render.png']):
    img(c,rel,M+j*(CW/2+8),y,CW/2-8,160)
   y-=180;y=para(c,'Architectural renders: Ekaant (left) and Eminence (right).',M,y,CW,'body')-26
  for title,text in p['sections']:
   y=para(c,title,M,y,CW,'label')-8
   y=para(c,text,M,y,CW,'body')-22
  if p.get('contact'):
   c.linkURL('https://wa.me/917000489767',(M,y-12,M+260,y+14),relative=0)
   y=para(c,'WhatsApp: wa.me/917000489767',M,y,CW,'body')-20
   c.linkURL('https://www.instagram.com/estatix.in/',(M,y-12,M+260,y+14),relative=0)
   y=para(c,'Instagram: instagram.com/estatix.in',M,y,CW,'body')
  assert y>65,(i+1,y)
  c.setStrokeColor(HexColor('#d1d5d1'));c.line(M,45,W-M,45)
  c.setFont('Helvetica',8);c.setFillColor(muted);c.drawString(M,30,'ESTATIX  /  FROM LAND TO LASTING VALUE.');c.drawRightString(W-M,30,f'{i+1:02d} / 12')
  c.showPage()
 c.save()
build(out/'Estatix_Corporate_Brochure.pdf')
build(out/'Estatix_Corporate_Brochure_Print.pdf')
(out).mkdir(exist_ok=True)
# Output is already in public/assets/brochure.
# Editable HTML layout with packaged local assets.
css='''@page{size:A4;margin:0}*{box-sizing:border-box}body{margin:0;background:#ddd;color:#051d26;font-family:Arial,sans-serif}.page{width:210mm;min-height:297mm;padding:18mm 16mm 15mm;margin:8mm auto;background:#f7f5f0;border-top:6mm solid #051d26;page-break-after:always}h1{font-size:32px;line-height:1.1;margin:20px 0}h2{font-size:13px;letter-spacing:1px;margin:24px 0 8px}p{font-size:14px;line-height:1.5;color:#475569}.label{font-size:11px;letter-spacing:2px;color:#a68a51;font-weight:bold}.photo{width:100%;height:65mm;object-fit:contain;background:#eceeea}.caption{font-size:11px}.duo{display:flex;gap:14px}.duo figure{width:50%;margin:0}.duo img{width:100%;height:50mm;object-fit:contain}footer{font-size:10px;border-top:1px solid #ccc;padding-top:12px;margin-top:25px}@media print{body{background:white}.page{margin:0;height:297mm}}'''
parts=['<!doctype html><html lang="en"><meta charset="utf-8"><title>Estatix Corporate Brochure</title><style>'+css+'</style><body>']
for i,p in enumerate(pages):
 section='<section class="page"><div class="label">'+html.escape(p['label'])+'</div><h1>'+html.escape(p['title']).replace('\n','<br>')+'</h1><p>'+html.escape(p.get('intro',''))+'</p>'
 if i==0: section+='<img class="photo" style="background:#051d26;height:32mm" src="assets/logo/estatix-logo-white.png">'
 if p.get('portraits'):section+='<div class="duo">'+''.join(f'<figure><img src="assets/{rel}"><p>{name}</p></figure>' for name,rel in [('Adarsh Chouksey','team/adarsh-chouksey.png'),('Kevin John','team/kevin-john.png')])+'</div>'
 if p.get('dual'):section+='<div class="duo">'+''.join(f'<figure><img src="assets/projects/{rel}"></figure>' for rel in ['ekaant-render.png','eminence-render.png'])+'</div><p class="caption">Architectural renders: Ekaant and Eminence.</p>'
 if p.get('image'):section+=f'<img class="photo" src="assets/{p["image"]}"><p class="caption">{html.escape(p.get("caption",""))}</p>'
 for title,text in p['sections']:section+='<h2>'+html.escape(title)+'</h2><p>'+html.escape(text).replace('\n','<br>')+'</p>'
 section+=f'<footer>ESTATIX / FROM LAND TO LASTING VALUE. &nbsp; {i+1:02d} / 12</footer></section>';parts.append(section)
parts.append('</body></html>');(brochure_dir/'index.html').write_text(''.join(parts))
if asset_dir.resolve() != (brochure_dir/'assets').resolve(): shutil.copytree(asset_dir,brochure_dir/'assets',dirs_exist_ok=True)
