const fs = require("fs")
import myGroupsWithModules from "./assets/data/my-groups-with-module-list"

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

  myGroupsWithModules.forEach(group => {
    createPage({
      path: `${basePath}groups/${group.subject.toLowerCase()}${group.year.slice(
        2,
        4
      )}`,
      component: require.resolve("./src/templates/myGroup/index.js"),
      context: {
        id: group.id,
        subject: group.subject,
        name: group.name,
        year: group.year,
        participatsCount: group.participantsCount,
        modules: group.modules,
      },
    })
  })

  //   categories.forEach(category => {
  //     createPage({
  //       path: `${basePath}${category.fieldValue.toLowerCase()}`,
  //       component: require.resolve("./src/templates/productList/index.js"),
  //       context: {
  //         name: category.fieldValue,
  //         filterValues: category.distinct,
  //       },
  //     })
  //   })
}
