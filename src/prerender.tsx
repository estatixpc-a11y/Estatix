import { renderToString } from 'react-dom/server';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import App from './App';
import { pageMetadata, siteOrigin } from './config/seo';
const template = readFileSync('dist/index.html','utf8');
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
for(const [path,[title,description]] of Object.entries(pageMetadata)) {
 let html=template.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`)
 .replace(/(<meta name="description" content=")[^"]*/,`$1${escape(description)}`)
 .replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(title)}`)
 .replace(/(<meta property="og:description" content=")[^"]*/,`$1${escape(description)}`)
 .replace(/(<meta property="og:url" content=")[^"]*/,`$1${siteOrigin+path}`)
 .replace(/(<link rel="canonical" href=")[^"]*/,`$1${siteOrigin+path}`)
 .replace('<div id="root"></div>',`<div id="root">${renderToString(<App initialPath={path}/>)}</div>`);
 const folder=join('dist',path);mkdirSync(folder,{recursive:true});writeFileSync(join(folder,'index.html'),html);
}
writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(pageMetadata).filter(p=>p!=='/privacy').map(p=>`<url><loc>${siteOrigin}${p}</loc></url>`).join('')+'</urlset>');
console.log(`Rendered ${Object.keys(pageMetadata).length} public pages and sitemap.`);
