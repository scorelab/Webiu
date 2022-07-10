import React from "react"
import Grid from "@material-ui/core/Grid"
import ClickableCard from "../../../ui/clickableCard"
import HorizontalCard from "../../../ui/horizontalCard"

const ProductsArray = ({ productList, filterOptions, sortOptions, layout }) => {
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

  console.log(sortedProducts)

  const ListView = () => (
    <>
      {isFilter
        ? filteredProducts.map((product, i) => (
            <HorizontalCard
              key={i}
              name={product.node.name}
              image={product.node.image}
              title={product.node.name}
              price={`$${product.node.price}`}
              description={product.node.details}
              link={`/${product.node.maincategory.toLowerCase()}/${
                product.node.id
              }`}
            />
          ))
        : sortedProducts.map((product, i) => (
            <HorizontalCard
              key={i}
              name={product.node.name}
              image={product.node.image}
              title={product.node.name}
              price={`$${product.node.price}`}
              description={product.node.details}
              link={`/${product.node.maincategory.toLowerCase()}/${
                product.node.id
              }`}
            />
          ))}
    </>
  )

  const GridView = () => (
    <>
      {isFilter
        ? filteredProducts.map((product, i) => (
            <ClickableCard
              key={i}
              name={product.node.name}
              img={product.node.image}
              title={product.node.name}
              description={`$${product.node.price}`}
              link={`/${product.node.maincategory.toLowerCase()}/${
                product.node.id
              }`}
            />
          ))
        : sortedProducts.map((product, i) => (
            <ClickableCard
              key={i}
              name={product.node.name}
              img={product.node.image}
              title={product.node.name}
              description={`$${product.node.price}`}
              link={`/${product.node.maincategory.toLowerCase()}/${
                product.node.id
              }`}
            />
          ))}
    </>
  )

  return (
    <Grid item container>
      {layout === "grid" ? <GridView /> : <ListView />}
    </Grid>
  )
}

export default ProductsArray
