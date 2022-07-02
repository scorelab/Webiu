exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
      path: `/${product.node.maincategory.toLowerCase()}/${product.node.name.toLowerCase()}`,
      component: require.resolve("./src/templates/productDetail/index.js"),
      context: {
        name: product.name,
        id: product.id,
        image: product.image,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.fieldValue.toLowerCase()}`,
      component: require.resolve("./src/templates/productList/index.js"),
      context: {
        name: category.fieldValue,
        filterValues: category.distinct,
      },
    })
  })
}
