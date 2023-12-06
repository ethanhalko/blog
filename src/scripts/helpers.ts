import blogConfig from '../../blog.config';

const inlineTokens = blogConfig.classTokens;

export const renderer = {
  paragraph(text: string) {
    const attrs: string[] = [];
    const search = /\[%\s*(.*?)\s*%\]/;

    let match;
    while ((match = search.exec(text)) !== null) {
      const [fullMatch, matchInner] = match;
      const [attr, value] = matchInner.split(':');

      if (!inlineTokens[attr]) continue;

      text = text.replace(fullMatch, '').trim();
      attrs.push(inlineTokens[attr].replace('%', value));
    }

    return attrs.length ? `<p class="${attrs.join(' ')}">${text}</p>` : `<p>${text}</p>`;
  },
  link(href: string, title: string, text: string) {
    return `<a target="_blank" href="${href}" title="${title}">${text}</a>`
  }
}

export function getTitle(file: string) {
  const titleLine = file.slice(file.indexOf('[%title%]'), file.indexOf('\n'))
  return titleLine.replace('[%title%]', '');
}
