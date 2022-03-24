const metaConfig = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Default Dark+',
              inlineCode: {
                marker: '•',
                theme: {
                  default: 'Default Light+',
                  dark: 'Default Dark+',
                },
              },
            },
          },
          {
            resolve: '@bonobolabs/gatsby-remark-images-custom-widths',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              quality: 80,
            },
          },
        ],
      },
    },
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 80,
        },
      },
    },
  ],
  pathPrefix: metaConfig.sitePathPrefix,
};
