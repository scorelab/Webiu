module.exports = ({
  contentPath = `${__dirname}/assets/data/`,
  basePath = "/",
}) => ({
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Item",
      },
    },
  ],
})
