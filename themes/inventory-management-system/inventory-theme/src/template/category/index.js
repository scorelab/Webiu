import React from "react"
import { navigate } from "gatsby"
import Layout from "../../ui/layout"
import BreadcrumbsWrapper from "../../ui/breadcrumbsWrapper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CategoryCard from "../../components/labs/categoryCard"
import CategoriesList from "../../../assets/categoriesList"
import Styles from "./styles"

const CategoryPageTemplate = ({ pageContext }) => {
  const classes = Styles()
  const linkList = [{ name: "Labs", url: "/" }, { name: "Categories" }]

  const btnHandler = id => {
    navigate(`/labs/category/${id}`)
  }

  const filterList = CategoriesList.filter(item => item.labId == pageContext.id)
  const items = filterList.map((ele, i) => (
    <Grid item>
      <CategoryCard
        imgUrl={ele.image}
        categoryName={ele.name}
        btnHandler={() => btnHandler(ele.id)}
      />
    </Grid>
  ))
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <BreadcrumbsWrapper elementList={linkList} />
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h2">Item Categories</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            classes={{ root: classes.space }}
          >
            {items}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default CategoryPageTemplate
