interface Config {
  headerTokens: string[];
  classTokens: Record<string, string>;
}

export default {
  headerTokens: ['title'],
  classTokens: {
    'text-align': 'text-%',
    'width': 'w-%',
    'align': '%-auto',
    'font-size': 'text-%'
  }
} as Config;
