import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import Styles from "./styles"

const TouchableCard = ({
  name,
  img,
  containerStyle,
  innerContainerStyle,
  imageContainerStyle,
  imageStyle,
  textChild,
}) => {
  const classes = Styles()
  return (
    <Grid
      container
      direction="column"
      component={Link}
      to="/page"
      style={{ textDecoration: "none" }}
      classes={{ root: containerStyle || classes.containerStyle }}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          classes={{ root: innerContainerStyle || classes.innerContainerStyle }}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              classes={{
                root: imageContainerStyle || classes.imageContainerStyle,
              }}
            >
              <Grid item>
                <img
                  src={img}
                  className={imageStyle || classes.imageStyle}
                  alt={name}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>{textChild}</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TouchableCard
