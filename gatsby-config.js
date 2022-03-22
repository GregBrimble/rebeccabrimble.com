require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: "Rebecca Brimble",
    siteTitleAlt: "Rebecca Brimble",
    siteHeadline: "Rebecca Brimble",
    siteUrl: "https://rebeccabrimble.com",
    siteDescription:
      "Rebecca Brimble is an Oxford University graduate (BA Jurisprudence) with a passion for advocacy, policy, and research.",
    siteLanguage: "en",
    siteImage: "/android-chrome-512x512.png",
    author: "@Becca_Brimble",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/rebeccabrimble`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rebecca Brimble`,
        short_name: `Rebecca Brimble`,
        description: `Rebecca Brimble is an Oxford University graduate (BA Jurisprudence) with a passion for advocacy, policy, and research.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
