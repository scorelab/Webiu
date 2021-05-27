module.exports = {
  siteMetadata: {
    title: `Webiu`,
    description: `Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing a “generalized website builder”, with the help of the Gatsby Js Framework. The individuals would be able to utilize this generalized platform to plug-in required modules and configure the datasource as per requirements to build custom websites for their organizations.`,
    author: `@ScoreLab`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/icons/icon-144x144.png`
      },
    }
  ],
}
