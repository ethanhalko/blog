import 'fs';
import * as fs from 'fs';
import {marked} from 'marked';
const CHUNK = 10;
const BASE_PATH = './posts';
export const generateManifest = () => {
  return {
    name: 'generate-manifest',
    async buildStart() {
      const dir = await fs.promises.readdir(BASE_PATH);
      const pages = Array(Math.ceil(dir.length / CHUNK)).fill([]);
      try {
        for (let i = 0; i < dir.length; ++i) {
          const pageNumber = Math.floor(i / CHUNK);
          const path = BASE_PATH + '/' + dir[i];
          const file = await fs.promises.readFile(path, { encoding: 'utf8' });

          const {birthtime, mtime} = await fs.promises.stat(path);

          const titleLine = file.slice(file.indexOf('[title]'),file.indexOf('\n'))
          const title = titleLine.replace('[title]', '');

          pages[pageNumber].push({
            title: title,
            content: marked.parse(file.slice(file.indexOf('\n'))),
            created_at: birthtime,
            updated_at: mtime
          });
        }

        pages.forEach((page, index) => {
          fs.promises.writeFile(`./src/pages/${index + 1}.json`, JSON.stringify(page));
        });

        fs.promises.writeFile(`./src/pages/manifest.json`, JSON.stringify({ page_count: pages.length }));
      } catch(e) {
        console.error(e);
      }
    }
  }
}
