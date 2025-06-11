import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AllTheory',
  tagline: 'Ψhē Theory — The Universe Knowing Itself Through Self-Referential Collapse',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://loning.github.io', // Replace 'auric' with actual GitHub username
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/alltheory/',

  // GitHub pages deployment config.
  organizationName: 'loning', // Replace with actual GitHub username
  projectName: 'alltheory', // Repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese,
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/loning/alltheory/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // Whether to index docs pages
        indexDocs: true,
        // Whether to index blog pages
        indexBlog: false,
        // Whether to index static pages
        indexPages: false,
        // Language of your documentation, supports "en", "zh", "ja", "ko", "th" and "de"
        language: ["en", "zh"],
        // Highlight search terms on target page
        highlightSearchTermsOnTargetPage: true,
        // Whether to display search results in a modal
        searchResultLimits: 8,
        // Whether to also search in page titles
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/psi-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Google Analytics configuration
    gtag: {
      trackingID: 'G-YJD1R6PLTV',
      anonymizeIP: true,
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
