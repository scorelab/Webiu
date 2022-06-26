module.exports = {
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/assets/data`,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Item",
      },
    },
  ],
}
