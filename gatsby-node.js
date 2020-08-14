const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;
  const projectTemplate = path.resolve('./src/templates/project.js');  

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            template
            slug
            title
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      const type = node.frontmatter.template
      
      if (type === 'project') {
        createPage({
          path: node.frontmatter.slug,
          component: projectTemplate,
          context: {
            slug: node.frontmatter.slug,
          }
        })
      }
    })
  })
}