import 'fs';
import * as fs from 'fs';
import {marked} from 'marked';
import {parse} from 'date-fns';
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

    fs.promises.writeFile(`./src/blog-pages/${index + 1}.json`, JSON.stringify(page));
  });

  fs.promises.writeFile(`./src/blog-pages/manifest.json`, JSON.stringify({page_count: pages.length}));
}

export const getPage = async (fileName: string) => {
  const path = BASE_PATH + '/' + fileName;
  const file = await fs.promises.readFile(path, {encoding: 'utf8'});
  const {mtime} = await fs.promises.stat(path);

  return {
    title: getTitle(file),
    content: await marked.parse(file.slice(file.indexOf('\n'))),
    created_at: parse(fileName.replace('.md', '').trim(), 'dd-MM-yy', new Date()),
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

          pages[Math.floor(i / CHUNK)].push(await getPage(dir[i]));
        }

        writePages(pages);
      } catch (e) {
        console.error(e);
      }
    }
  }
}
