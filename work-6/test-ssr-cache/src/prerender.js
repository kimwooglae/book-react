import fs from 'fs';
import path from 'path';
import { renderPage, prerenderPages } from './common';

for(const page of prerenderPages) {
    console.log('prerender', page);
    const result = renderPage(page);
    fs.writeFileSync(path.resolve(__dirname, `../dist/${page}.html`), result);
}