const fs = require("fs")
// import myGroupsWithModules from "./assets/data/my-groups-with-module-list"
import LabsList from "./assets/labsList"

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
}

// exports.createPages = async ({ graphql, actions }, options) => {
//   const { createPage } = actions
//   const basePath = options.basePath || "/"

//   myGroupsWithModules.forEach(group => {
//     createPage({
//       path: `${basePath}groups/${group.subject.toLowerCase()}${group.year.slice(
//         2,
//         4
//       )}`,
//       component: require.resolve("./src/templates/myGroup/index.js"),
//       context: {
//         id: group.id,
//         subject: group.subject,
//         name: group.name,
//         year: group.year,
//         participatsCount: group.participantsCount,
//         modules: group.modules,
//       },
//     })
//     group.modules.forEach(module => {
//       createPage({
//         path: `${basePath}groups/${group.subject.toLowerCase()}${group.year.slice(
//           2,
//           4
//         )}/${module.id}`,
//         component: require.resolve("./src/templates/modules/index.js"),
//         context: {
//           id: module.id,
//           name: module.moduleName,
//           submodules: module.subModules,
//         },
//       })
//     })
//   })
// }
