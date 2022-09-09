import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const TextContainerWithBackgroundImage = ({
  firstHeader,
  secondHeader,
  height,
}) => {
  const classes = Styles({ height })
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item classes={{ root: classes.space }}>
        <Typography classes={{ root: classes.textStyle }}>
          {firstHeader}
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Typography classes={{ root: classes.textStyle }}>
          {secondHeader}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TextContainerWithBackgroundImage
