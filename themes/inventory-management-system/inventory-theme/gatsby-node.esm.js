const fs = require("fs")
import LabsList from "./assets/labsList"
import CategoriesList from "./assets/categoriesList"

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

  LabsList.forEach(lab => {
    createPage({
      path: `${basePath}labs/${lab.id}`,
      component: require.resolve("./src/template/category/index.js"),
      context: {
        id: lab.id,
        location: lab.location,
      },
    })
  })
  CategoriesList.forEach(category => {
    createPage({
      path: `${basePath}labs/category/${category.id}`,
      component: require.resolve("./src/template/item/index.js"),
      context: {
        categoryId: category.id,
        labId: category.labId,
      },
    })
  })
}
