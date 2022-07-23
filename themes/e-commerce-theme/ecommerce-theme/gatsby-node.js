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
      categories: allItem {
        group(field: maincategory) {
          distinct(field: subcategory)
          field
          fieldValue
        }
      }
      products: allItem {
        edges {
          node {
            details
            id
            image
            maincategory
            name
            price
            quantity
            subcategory
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const products = result.data.products.edges
  const categories = result.data.categories.group

  products.forEach(product => {
    createPage({
      path: `${basePath}${product.node.maincategory.toLowerCase()}/${
        product.node.id
      }`,
      component: require.resolve("./src/templates/productDetail/index.js"),
      context: {
        name: product.node.name,
        id: product.node.id,
        image: product.node.image,
        details: product.node.details,
        maincategory: product.node.maincategory,
        price: product.node.price,
        quantity: product.node.quantity,
        subcategory: product.node.subcategory,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `${basePath}${category.fieldValue.toLowerCase()}`,
      component: require.resolve("./src/templates/productList/index.js"),
      context: {
        name: category.fieldValue,
        filterValues: category.distinct,
      },
    })
  })
}
