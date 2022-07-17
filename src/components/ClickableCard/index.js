import React from "react"
import PropTypes, { string } from "prop-types"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import Styles from "./styles"
import Typography from "@material-ui/core/Typography"

const ClickableCard = ({
  name,
  img,
  link,
  title,
  description,
  containerStyle,
  innerContainerStyle,
  imageContainerStyle,
  imageStyle,
}) => {
  const classes = Styles()
  return (
    <Grid
      container
      direction="column"
      component={Link}
      to={link}
      style={{ textDecoration: "none" } || containerStyle}
      classes={{ root: classes.containerStyle }}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          classes={{ root: classes.innerContainerStyle }}
          style={innerContainerStyle}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              classes={{ root: classes.imageContainerStyle }}
              style={imageContainerStyle}
            >
              <Grid item>
                <img
                  src={img}
                  className={classes.imageStyle}
                  alt={name}
                  style={imageStyle}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {title && <Typography align="center">{title}</Typography>}
            {description && (
              <Typography align="center">{description}</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

ClickableCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  containerStyle: PropTypes.object,
  innerContainerStyle: PropTypes.object,
  imageContainerStyle: PropTypes.object,
  imageStyle: PropTypes.object,
}

export default ClickableCard
