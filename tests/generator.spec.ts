import {it, expect, beforeEach} from 'vitest';
import {getPage} from '../src/scripts/generate-contents';
import type {Post} from '../types/blog';

let post: Post;
beforeEach(async () => {
  post = await getPage('tests/test.md');
});

it('converts class tokens to HTML classes', async () => {
  expect(post.content).toBe('<p class="text-center">Testing center aligned text, inline token</p><p class="text-right">Right aligned text here - Lorem Ipsum, etc.</p>')
});

it('sets and removes title from token', () => {
  expect(post.content).not.toContain('[%title%]');
  expect(post.title).toBe('This is a file');
})
