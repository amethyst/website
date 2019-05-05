const path = require(`path`)
require("dotenv").config({ path: `.env` })

const prismicRepo = "amethyst"
// TODO(happens): Fix this to respect posts and pages
const linkResolver = ({ node, key, value }) => doc => `/${doc.uid}`

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Amethyst Game Engine`,
        short_name: `amethyst.rs`,
        start_url: `/`,
        background_color: `#7f41ef`,
        theme_color: `#7f41ef`,
        display: `minimal-ui`,
        icon: `src/assets/logo-filled.svg`,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `amethyst`,
        accessToken: `process.env.PRISMIC_API_KEY`,
        linkResolver,
      },
    },
  ],
}
