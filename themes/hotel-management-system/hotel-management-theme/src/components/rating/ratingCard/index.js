import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Rating from "@mui/material/Rating"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"

const RatingsCard = ({
  imgUrl,
  userName,
  experience,
  ratingValue,
  details,
}) => {
  const classes = Styles()

  const moreInfo = details.map(item => (
    <Grid item classes={{ root: classes.detailStyle }} key={item.id}>
      <Button
        startIcon={
          <FontAwesomeIcon icon={item.icon} className={classes.iconStyle} />
        }
        classes={{ root: classes.availableBtnStyle }}
      >
        {item.key} : {item.value}
      </Button>
    </Grid>
  ))

  return (
    <Grid container classes={{ root: classes.container }}>
      <Grid item xs={7}>
        <Grid
          container
          direction="column"
          classes={{ root: classes.innerContainer }}
        >
          <Grid item>
            <Typography variant="h3">{userName}</Typography>
          </Grid>
          <Grid item classes={{ root: classes.space }}>
            <Typography classes={{ root: classes.ratingText }}>
              {experience}
            </Typography>
          </Grid>
          <Grid item classes={{ root: classes.space }}>
            <Rating value={ratingValue} precision={0.5} readOnly />
          </Grid>
          <Grid item container>
            {moreInfo}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid container direction="column">
          <img src={imgUrl} className={classes.imgStyle} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RatingsCard
