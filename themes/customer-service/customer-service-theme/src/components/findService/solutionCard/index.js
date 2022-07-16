import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const SolutionCard = ({ imgURL, name }) => {
  const classes = Styles()
  return (
    <Grid container direction="column" classes={{ root: classes.card }}>
      <Grid item>
        <img
          src={imgURL}
          style={{
            width: 300,
            height: 250,
            boarderRadiusLeft: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      </Grid>
      <Grid item xs classes={{ root: classes.textWrapper }}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="h4">{name}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SolutionCard
