import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"

const GroupCategory = ({ iconName, title }) => {
  const classes = Styles()
  return (
    <Grid
      container
      classes={{ root: classes.container }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item>
        <FontAwesomeIcon icon={iconName} size="1x" />
      </Grid>
      <Grid item>
        <Typography classes={{ root: classes.textStyle }}>{title}</Typography>
      </Grid>
    </Grid>
  )
}

export default GroupCategory
