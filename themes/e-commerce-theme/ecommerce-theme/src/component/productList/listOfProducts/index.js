import React from "react"
import Grid from "@material-ui/core/Grid"
import ClickableCard from "../../../ui/clickableCard"

const ProductsArray = ({ productList }) => {
  return (
    <Grid item container>
      {productList.map((product, i) => (
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
