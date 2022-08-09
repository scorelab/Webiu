import React from "react"
import Grid from "@material-ui/core/Grid"
import ModuleHeader from "../../modules/header"
import Layout from "../../ui/layout"
import Styles from "./styles"

const MyGroupsWithModules = ({ pageContext }) => {
  const classes = Styles()
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
      </Grid>
    </Layout>
  )
}

export default MyGroupsWithModules
