import React, { useState } from "react"
import Carousel from "react-spring-3d-carousel"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import clsx from "clsx"
import Styles from "./styles"

const CarouselAnimation = ({ promoList }) => {
  const classes = Styles()
  const [selectedSlide, setSelectedSlide] = useState(0)
  let slides = []
  promoList.forEach((item, i) => {
    slides.push({
      key: i,
      content: (
        <Grid container direction="column">
          <Grid item>
            <IconButton
              disableRipple
              onClick={() => setSelectedSlide(i)}
              classes={{
                root: clsx(classes.imageCard, {
                  [classes.space]: selectedSlide !== i,
                }),
              }}
            >
              <img src={item.image} className={classes.imageStyle} />
            </IconButton>
          </Grid>
        </Grid>
      ),
    })
  })
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
    </Grid>
  )
}

export default CarouselAnimation
