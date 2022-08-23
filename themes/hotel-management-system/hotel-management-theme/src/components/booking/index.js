import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const BookingCard = ({
  imgUrl,
  title,
  description,
  roomId,
  moreInfoList,
  availability,
}) => {
  const classes = Styles({ availability })

  const moreInfo = moreInfoList.map(ele => (
    <Grid item key={ele.id} classes={{ root: classes.detailStyle }}>
      <Button
        startIcon={
          <FontAwesomeIcon icon={ele.icon} className={classes.iconStyle} />
        }
        classes={{ root: classes.normalBtnStyle }}
      >
        {ele.key}: {ele.value}
      </Button>
    </Grid>
  ))
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item>
        <img src={imgUrl} className={classes.imgStyle} />
      </Grid>
      <Grid container direction="column" classes={{ root: classes.wrapper }}>
        <Grid item>
          <Typography align="center">{title}</Typography>
        </Grid>
        <Grid item>
          <Divider classes={{ root: classes.divideStyle }} />
        </Grid>
        <Grid item classes={{ root: classes.space }}>
          <Typography variant="h6">{description}</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          classes={{ root: classes.fullWidthContainer }}
        >
          <Grid item container justifyContent="center">
            <Typography variant="h4">Room Number: {roomId}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.wrapper }}
      >
        <Grid item container direction="row">
          {moreInfo}
        </Grid>
        <Grid
          item
          container
          direction="row"
          classes={{ root: classes.space }}
          justifyContent="space-around"
        >
          <Grid item>
            <Button
              startIcon={
                availability ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )
              }
              classes={{ root: classes.avaiableBtnStyle }}
            >
              {availability ? "Available" : "Unavailable"}
            </Button>
          </Grid>
          <Grid item>
            <Button classes={{ root: classes.bookBtnStyle }}>Book Now</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BookingCard
