import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 解析當前模塊的目錄
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 生成 SitemapStream 實例
const sitemapStream = new SitemapStream({ hostname: 'https://rcstudio.tw' });

// 添加 URL 項目
const urls = [
    { url: '/', lastmod: new Date().toISOString() },
    { url: '/About', lastmod: new Date().toISOString() },
    { url: '/Case', lastmod: new Date().toISOString() },
    { url: '/JoinUS', lastmod: new Date().toISOString() },
    { url: '/contactUS', lastmod: new Date().toISOString() },
    { url: '/No', lastmod: new Date().toISOString() },
    { url: '/news', lastmod: new Date().toISOString() },
];

// 將 URL 項目寫入 SitemapStream
urls.forEach(url => sitemapStream.write(url));
sitemapStream.end();

// 將 SitemapStream 轉換為 XML 字符串並寫入文件
streamToPromise(sitemapStream).then(data => {
    const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, data.toString());
    console.log('Sitemap generated at:', outputPath);
}).catch(error => {
    console.error('Error generating sitemap:', error);
});
