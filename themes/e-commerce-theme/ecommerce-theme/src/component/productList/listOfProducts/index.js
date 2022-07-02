import React from "react"
import Grid from "@material-ui/core/Grid"
import ClickableCard from "../../../ui/clickableCard"

const ProductsArray = ({ productList, filterOptions, sortOptions }) => {
  const filteredProducts = []
  let isFilter = false
  const selectedSort = sortOptions.filter(option => option.active)[0]
  const sortedProducts = selectedSort.function(productList)

  filterOptions.forEach(item => {
    if (item.checked) {
      isFilter = true
      const lst = sortedProducts.filter(
        product => product.node.subcategory === item.label
      )
      filteredProducts.push(lst[0])
    }
  })

  return (
    <Grid item container>
      {isFilter
        ? filteredProducts.map((product, i) => (
            <ClickableCard
              key={i}
              name={product.node.name}
              img={product.node.image}
              title={product.node.name}
              description={`$${product.node.price}`}
              link="/go"
            />
          ))
        : sortedProducts.map((product, i) => (
            <ClickableCard
              key={i}
              name={product.node.name}
              img={product.node.image}
              title={product.node.name}
              description={`$${product.node.price}`}
              link="/go"
            />
          ))}
    </Grid>
  )
}

export default ProductsArray
