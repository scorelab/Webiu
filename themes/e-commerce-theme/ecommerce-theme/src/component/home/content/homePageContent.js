import React from "react"
import { navigate } from "gatsby"
import { Grid, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import ClickableCard from "../../../ui/clickableCard"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "./styles"

const HomePageContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allItem {
        group(field: maincategory, limit: 5) {
          edges {
            node {
              name
              id
              price
              image
            }
          }
          field
          fieldValue
        }
      }
    }
  `)
  const lst = data.allItem.group
  const classes = Styles()
  const content = lst.map((ele, i) => {
    return (
      <Grid
        container
        key={i}
        direction="column"
        justifyContent="space-around"
        classes={{ root: classes.container }}
      >
        <Grid item>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography variant="h3">{ele.fieldValue} Items</Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => navigate(`/${ele.fieldValue.toLowerCase()}`)}
              >
                <Typography variant="h5">View All</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="flex-start">
            {ele.edges.map((item, j) => {
              return (
                <Grid item key={j}>
                  <ClickableCard
                    img={item.node.image}
                    name={item.node.name}
                    title={item.node.name}
                    description={`$${item.node.price}`}
                    link={`/${ele.fieldValue.toLowerCase()}/${item.node.id}`}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  })
  return <div>{content}</div>
}

export default HomePageContent
