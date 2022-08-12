import React from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ModuleHeader from "../../modules/header"
import Layout from "../../ui/layout"
import ImageCard from "../../modules/imageCard"
import Styles from "./styles"

const MyGroupsWithModules = ({ pageContext }) => {
  const classes = Styles()
  const modules = pageContext.modules.map(item => {
    return (
      <Grid item key={item.id} classes={{ root: classes.wrapper }}>
        <ImageCard
          moduleName={item.moduleName}
          imageUrl={item.image}
          onClickHandler={() => {
            navigate(item.id)
          }}
        />
      </Grid>
    )
  })
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <ModuleHeader
            subject={pageContext.subject}
            year={pageContext.year}
            name={pageContext.name}
            participatsCount={pageContext.participatsCount}
          />
        </Grid>
        <Grid item classes={{ root: classes.space }}>
          <Typography>
            {pageContext.modules.length} modules are followed
          </Typography>
        </Grid>
        <Grid item classes={{ root: classes.space }}>
          <Grid container>{modules}</Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default MyGroupsWithModules
