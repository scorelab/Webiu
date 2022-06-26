import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CarouselAnimation from "../promotionalItem/index"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileExport } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const HeaderBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      allItem(filter: { promo: { eq: true } }) {
        edges {
          node {
            image
          }
        }
      }
    }
  `)
  const classes = Styles()
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
      >
        <Grid item>
          <CarouselAnimation promoList={data.allItem.edges} />
        </Grid>
        <Grid item classes={{ root: classes.textContainer }}>
          <Typography variant="h2">
            Durable materials make ourlives comfortable year round
          </Typography>
          <Button classes={{ root: classes.btnTextStyle }}>
            <Typography variant="h2" classes={{ root: classes.btnTextStyle }}>
              Explore
            </Typography>
            <FontAwesomeIcon icon={faFileExport} size="2x" color="white" />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default HeaderBanner
