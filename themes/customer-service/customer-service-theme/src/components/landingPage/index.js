import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/core/Icon"
import Styles from "./styles"
import workImage from "../../../assets/images/undraw_work.svg"

const HomeContent = () => {
  const classes = Styles()
  return (
    <Grid container direction="row">
      <Grid item classes={{ root: classes.firstCol }}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h2"
              classes={{ root: classes.textWrapper }}
              align="center"
            >
              We deliver best service for you
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              classes={{ root: classes.description }}
              variant="h3"
              align="center"
            >
              Our platform is best platform available for you to fix problems.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item classes={{ root: classes.imgStyle }}>
            <Icon>
              <img src={workImage} style={{ width: "100%", height: "100%" }} />
            </Icon>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeContent
