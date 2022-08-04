import React, { useState } from "react"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../../ui/layout"
import ExploreServiceCard from "../../components/exploreServiceCard"
import Styles from "./styles"

const ServiceList = ({ pageContext, data }) => {
  const [ratings, setRatings] = useState("")
  const classes = Styles()
  const handleRatings = event => {
    setRatings(event.target.value)
  }
  const serviceCards = data.services.edges.map((ele, i) => {
    return (
      <Grid container classes={{ root: classes.container }} key={i}>
        <ExploreServiceCard
          name={ele.node.name}
          userName={ele.node.userName}
          description={ele.node.description}
          location={ele.node.location}
          id={ele.node.id}
        />
      </Grid>
    )
  })
  return (
    <Layout>
      <Grid
        container
        direction="column"
        classes={{ root: classes.container }}
        justifyContent="flex-start"
      >
        <Grid item>
          <Typography variant="h2">Explore Service Providers</Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            classes={{ root: classes.wrapper }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <FontAwesomeIcon icon={faFilter} size="2x" />
            </Grid>
            <Grid item>
              <Typography>Sort By</Typography>
            </Grid>
            <Grid item classes={{ root: classes.select }}>
              <FormControl classes={{ root: classes.formControl }}>
                <InputLabel>Ratings</InputLabel>
                <Select value={ratings} onChange={handleRatings}>
                  <MenuItem value="decrease">High to Low</MenuItem>
                  <MenuItem value="increase">Low to High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{serviceCards}</Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query GetServices($category: String!) {
    services: allItems(filter: { category: { eq: $category } }) {
      edges {
        node {
          category
          email
          description
          contactNumber
          id
          location
          name
          userName
        }
      }
    }
  }
`

export default ServiceList
