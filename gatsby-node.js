// const path = require('path');

// exports.createPages = ({boundActionCreators, graphql}) => {
//   const {createPage} = boundActionCreators;
//   const blogTemplate = path.resolve('./src/templates/blog.js');  
//   const projectTemplate = path.resolve('./src/templates/project.js');  

//   return graphql(`{
//     allMarkdownRemark {
//       edges {
//         node {
//           html
//           id
//           frontmatter {
//             type
//             slug
//             title
//           }
//         }
//       }
//     }
//   }`)
//   .then(res => {
//     if(res.errors) {
//       return Promise.reject(res.errors);
//     }

//     res.data.allMarkdownRemark.edges.forEach(({node}) => {
//       const type = node.frontmatter.type
//       let template = null

//       switch (type) {
//         case "BLOG":
//           template = blogTemplate
//           break;
//         case "PROJECT":
//           template = projectTemplate
//           break;
//         default:
//           break;
//       }

//       createPage({
//         path: node.frontmatter.slug,
//         component: template,
//         context: {
//           slug: node.frontmatter.slug,
//         }
//       })
//     })
//   })
// }