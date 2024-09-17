import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapStream = new SitemapStream({ hostname: 'https://rcstudio.tw' });

const urls = [
    { url: '/', lastmod: new Date().toISOString() },
    { url: '/About', lastmod: new Date().toISOString() },
    { url: '/Case', lastmod: new Date().toISOString() },
    { url: '/JoinUS', lastmod: new Date().toISOString() },
    { url: '/contactUS', lastmod: new Date().toISOString() },
    { url: '/No', lastmod: new Date().toISOString() },
    { url: '/news', lastmod: new Date().toISOString() },
];

urls.forEach(url => sitemapStream.write(url));
sitemapStream.end();

streamToPromise(sitemapStream).then(data => {
    const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, data.toString());
    console.log('Sitemap generated at:', outputPath);
}).catch(error => {
    console.error('Error generating sitemap:', error);
});
