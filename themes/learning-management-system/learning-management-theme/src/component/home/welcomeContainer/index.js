import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const WelcomeContainer = () => {
  const classes = Styles()
  return (
    <Grid
      container
      justifyContent="center"
      classes={{ root: classes.container }}
    >
      <Grid item classes={{ root: classes.space }}>
        <Typography variant="h1">
          <span className={classes.decoratedText}>Welcome </span>
          to UoM Institute
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Typography variant="h2">
          Proudly present for the first time in Galle “UOM Higher Education
          Institute", Sri Lanka's only one state of the art auditorium built
          with luxury, high technology and modern technology for the children of
          the future.
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Typography variant="h2">
          The UOM Higher Education Institute has been designed to be
          aesthetically pleasing in nature, both indoor and outdoor with modern
          amenities like Air-Conditioned auditorium.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default WelcomeContainer
