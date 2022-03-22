const metaConfig = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: metaConfig.siteBaseUrl + metaConfig.sitePathPrefix,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: false,
        fileName: `./src/lib/graphql-types.ts`,
        codegenPlugins: [
          {
            resolve: 'typescript',
            options: {
              namingConvention: `lower-case#lowerCase`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
  ],
  pathPrefix: metaConfig.sitePathPrefix,
};
