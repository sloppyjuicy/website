module.exports = {
  title: "Rippledb",
  tagline: "Embeddable key-value database engine in pure TypeScript",
  url: "https://rippledb.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "rippledb", // Usually your GitHub org/user name.
  projectName: "rippledb.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Rippledb",
      logo: {
        alt: "Rippledb site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/heineiuo/rippledb",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/rippledb",
            },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/rippledb",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/rippledb",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/heineiuo/rippledb",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rippledb. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "get-started",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/rippledb/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/rippledb/website/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
