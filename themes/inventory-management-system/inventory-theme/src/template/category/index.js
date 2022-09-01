import React from "react"
import { Link } from "gatsby"
import Layout from "../../ui/layout"
import BreadcrumbsWrapper from "../../ui/breadcrumbsWrapper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const CategoryPageTemplate = ({ pageContext }) => {
  const classes = Styles()
  const linkList = [{ name: "Labs", url: "/" }, { name: "Categories" }]
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <Typography>{pageContext.id}</Typography>
        </Grid>
        <Grid item>
          <BreadcrumbsWrapper elementList={linkList} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default CategoryPageTemplate
