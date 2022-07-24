import React, { useState } from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleLeft,
  faAngleRight,
  faToolbox,
  faCalendar,
  faUserCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const ReviewSection = ({ reviews }) => {
  const [activeReview, setActiveReview] = useState(0)
  const classes = Styles()
  const reviewLength = reviews.length

  const increaseHandler = () => {
    const len = reviews.length - 1
    if (activeReview < len) {
      setActiveReview(activeReview + 1)
    } else {
      setActiveReview(0)
    }
  }
  const decreaseHandler = () => {
    if (activeReview > 0) {
      setActiveReview(activeReview - 1)
    } else {
      setActiveReview(reviews.length - 1)
    }
  }

  const dots = reviews.map((ele, i) => {
    const circleColor = activeReview === i ? "#000" : "#9e9e9e"
    return (
      <Grid item classes={{ root: classes.dotStyle }}>
        <FontAwesomeIcon icon={faCircle} style={{ color: circleColor }} />
      </Grid>
    )
  })
  return (
    <>
      {reviewLength !== 0 && (
        <Grid
          container
          direction="column"
          classes={{ root: classes.container }}
          alignItems="center"
        >
          <Grid item>
            <Grid container alignItems="center">
              <Grid item classes={{ root: classes.arrowSpace }}>
                <IconButton onClick={decreaseHandler}>
                  <FontAwesomeIcon icon={faAngleLeft} size="1x" />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  classes={{ root: classes.innerContainer }}
                >
                  <Grid item container alignItems="center">
                    <Grid item classes={{ root: classes.iconSpace }}>
                      <FontAwesomeIcon icon={faToolbox} size="1x" />
                    </Grid>
                    <Grid item>
                      <Typography>{reviews[activeReview].issue}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item classes={{ root: classes.iconSpace }}>
                      <FontAwesomeIcon icon={faCalendar} size="1x" />
                    </Grid>
                    <Grid item>
                      <Typography>{reviews[activeReview].date}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item classes={{ root: classes.iconSpace }}>
                      <FontAwesomeIcon icon={faUserCheck} size="1x" />
                    </Grid>
                    <Grid item>
                      <Typography>
                        Customer Review: {reviews[activeReview].customerReview}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item classes={{ root: classes.arrowSpace }}>
                <IconButton onClick={increaseHandler}>
                  <FontAwesomeIcon icon={faAngleRight} size="1x" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>{dots}</Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

ReviewSection.propTypes = {
  reviews: PropTypes.array,
}

export default ReviewSection
