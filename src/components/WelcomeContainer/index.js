import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const WelcomeContainer = ({ styledTitle, title, firstPara, secondPara }) => {
  const classes = Styles()
  return (
    <Grid
      container
      justifyContent="center"
      classes={{ root: classes.container }}
    >
      <Grid item classes={{ root: classes.space }}>
        <Typography variant="h1">
          {styledTitle && (
            <span className={classes.decoratedText}>{styledTitle}</span>
          )}
          {title && <span>{title}</span>}
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        {firstPara && <Typography variant="h6">{firstPara}</Typography>}
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        {secondPara && <Typography variant="h6">{secondPara}</Typography>}
      </Grid>
    </Grid>
  )
}

WelcomeContainer.propTypes = {
  styledTitle: PropTypes.string,
  title: PropTypes.string,
  firstPara: PropTypes.string,
  secondPara: PropTypes.string,
}

export default WelcomeContainer
