import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const ImageCard = ({
  imageUrl,
  moduleName,
  height,
  width,
  imageHeight,
  onClickHandler,
}) => {
  const classes = Styles({ height, width, imageHeight })
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.card }}
      alignItems="center"
    >
      <Grid item>
        <img src={imageUrl} className={classes.image} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item classes={{ root: classes.space }}>
          <Typography classes={{ root: classes.title }}>
            {moduleName}
          </Typography>
        </Grid>
        <Grid item classes={{ root: classes.space }}>
          <Grid
            container
            classes={{ root: classes.viewModel }}
            justifyContent="center"
            alignItems="center"
            onClick={onClickHandler}
          >
            <Typography variant="body2">View Model</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

ImageCard.propTypes = {
  imageUrl: PropTypes.string,
  moduleName: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  imageHeight: PropTypes.string,
  onClickHandler: PropTypes.func,
}

export default ImageCard
