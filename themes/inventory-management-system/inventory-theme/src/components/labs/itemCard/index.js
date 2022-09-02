import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Styles from "./styles"

const ItemCard = ({ imageUrl, name, description }) => {
  const classes = Styles()
  return (
    <Grid container direction="row" classes={{ root: classes.container }}>
      <Grid item>
        <img src={imageUrl} className={classes.imgStyle} />
      </Grid>
      <Grid item xs>
        <Grid
          container
          direction="column"
          alignItems="center"
          classes={{ root: classes.innerWrapper }}
        >
          <Grid item>
            <Typography variant="h3">{name}</Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            classes={{ root: classes.space }}
          >
            <Grid item xs={8}>
              <Typography variant="h4">{description}</Typography>
            </Grid>
            <Grid item xs={4} classes={{ root: classes.btnWrapper }}>
              <Button classes={{ root: classes.btnStyle }}>
                Add To Bucket
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ItemCard
