import 'fs';
import * as fs from 'fs';
import {marked} from 'marked';
import {renderer, getTitle} from './helpers';
import type {Post} from '../../types/blog';

type Page = Post[];
type Blog = Page[];

const CHUNK = 10;
const BASE_PATH = './posts';

marked.use({renderer});

function writePages(pages: Blog) {
  pages.forEach((page, index) => {
    page.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

    fs.promises.writeFile(`./src/pages/${index + 1}.json`, JSON.stringify(page));
  });

  fs.promises.writeFile(`./src/pages/manifest.json`, JSON.stringify({page_count: pages.length}));
}

export const getPage = async (path: string) => {
  const file = await fs.promises.readFile(path, {encoding: 'utf8'});

  const {birthtime, mtime} = await fs.promises.stat(path);

  return {
    title: getTitle(file),
    content: await marked.parse(file.slice(file.indexOf('\n'))),
    created_at: birthtime,
    updated_at: mtime
  }
}

export const generateContents = () => {
  return {
    name: 'generate-contents',
    async buildStart() {
      const dir = await fs.promises.readdir(BASE_PATH);
      const pages: Blog = Array(Math.ceil(dir.length / CHUNK)).fill([]);

      try {
        for (let i = 0; i < dir.length; ++i) {
          const path = BASE_PATH + '/' + dir[i];

          pages[Math.floor(i / CHUNK)].push(await getPage(path));
        }

        writePages(pages);
      } catch (e) {
        console.error(e);
      }
    }
  }
}
