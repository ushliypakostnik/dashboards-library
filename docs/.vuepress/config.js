module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'UI Library',
      description: 'Vue Component UI Library',
    },
  },

  themeConfig: {
    repoLabel: 'GitHub repo',
    repo: 'https://github.com/ushliypakostnik/ui-library-starter-test.git',
    docsDir: 'docs',
    search: false,
    locales: {
      '/': {
        nav: [{ text: 'NPM', link: 'https://www.npmjs.com/package/ui-library-starter-test' }],
        sidebar: [
          {
            title: `Components`,
            children: [
              {
                title: `Link`,
                path: '/components/link',
              },
              {
                title: `ComponentName`,
                path: '/components/component-name',
              },
            ],
          },
        ],
      },
    },
  },
};
