import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const FoodCard = ({ imgUrl, title, description, price, availability }) => {
  const classes = Styles({ availability })
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
        <Grid item>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            classes={{ root: classes.space }}
          >
            <Grid item>
              <Typography classes={{ root: classes.priceStyle }}>
                ${price}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                startIcon={
                  availability ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faXmark} />
                  )
                }
                classes={{ root: classes.btnStyle }}
              >
                {availability ? "Available" : "Unavailable"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FoodCard
