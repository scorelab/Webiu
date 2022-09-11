import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Layout from "../../ui/layout"
import BreadcrumbsWrapper from "../../ui/breadcrumbsWrapper"
import ItemCard from "../../components/labs/itemCard"
import ItemsList from "../../../assets/itemsList"

const ItemPageTemplate = ({ pageContext }) => {
  const navList = [
    { name: "Labs", url: "/" },
    { name: "Categories", url: `/labs/${pageContext.labId}` },
    { name: "Items" },
  ]
  const items = ItemsList.filter(
    ele => ele.categoryId === pageContext.categoryId
  ).map(item => (
    <ItemCard
      imageUrl={item.image}
      name={item.name}
      description={item.description}
      key={item.id}
    />
  ))
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <BreadcrumbsWrapper elementList={navList} />
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h2">Items</Typography>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center">
              {items}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ItemPageTemplate
