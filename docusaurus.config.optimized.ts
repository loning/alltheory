import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Optimized configuration for faster builds
const config: Config = {
  title: 'AllTheory',
  tagline: 'Ψhē Theory — The Universe Knowing Itself Through Self-Referential Collapse',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://loning.github.io',
  baseUrl: '/alltheory/',

  organizationName: 'loning',
  projectName: 'alltheory',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // OPTIMIZATION 1: Build only one locale at a time
  i18n: {
    defaultLocale: 'en',
    locales: process.env.BUILD_LOCALE ? [process.env.BUILD_LOCALE] : ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/loning/alltheory/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // OPTIMIZATION 2: Disable MDX processing for faster builds
          exclude: process.env.FAST_BUILD ? ['**/*.mdx'] : [],
          // OPTIMIZATION 3: Limit concurrent file processing
          numberConcurrentRequests: 16,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-YJD1R6PLTV',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    // OPTIMIZATION 4: Conditional search plugin loading
    process.env.SKIP_SEARCH_INDEX !== 'true' && [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        // OPTIMIZATION 5: Exclude certain directories from search
        docsRouteBasePath: '/docs',
        excludeRoutes: [
          '/docs/psi-theory/book-4-anw-codex/**',
          '/docs/psi-theory/book-5-metaecho-codex/**',
          '/docs/psi-theory/book-6-dream-codex/**',
        ],
      },
    ],
  ].filter(Boolean),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/psi-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ψ',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Theory',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://aelf.com/',
          label: 'aelf blockchain',
          position: 'right',
        },
        {
          href: 'https://aevatar.ai/',
          label: 'AEVATAR AI',
          position: 'right',
        },
        {
          href: 'https://godgpt.fun/',
          label: 'GodGPT',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Theory Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/loning/alltheory/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/loning/alltheory/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/loning/alltheory',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AllTheory Project. Built with Docusaurus. <br/> ψ = ψ(ψ)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {name: 'keywords', content: 'psi theory, self-referential, universe, philosophy, mathematics'},
      {name: 'description', content: 'Ψhē Theory — The minimal, complete, and self-sufficient conceptual kernel of the universe as a single recursive identity'},
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;