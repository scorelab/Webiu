const fs = require("fs")

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || `${__dirname}/assets/data/`

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions
  const basePath = options.basePath || "/"

  const result = await graphql(`
    {
      services: allItems {
        distinct(field: category)
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const services = result.data.services.distinct

  services.forEach(service => {
    createPage({
      path: `${basePath}findService/${service.toLowerCase()}`,
      component: require.resolve("./src/templates/serviceList/index.js"),
      context: {
        category: service,
      },
    })
  })
}
