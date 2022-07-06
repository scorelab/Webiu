import React from "react"
import Grid from "@material-ui/core/Grid"
import Styles from "./styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const HorizontalCard = ({ image, price, name, title, description }) => {
  const styles = Styles()
  return (
    <Grid
      container
      classes={{ root: styles.containerStyle }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <img src={image} style={{ height: 200, width: 200 }} alt={name} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Typography>{title}</Typography>
          <Typography>{price}</Typography>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Button classes={{ root: styles.btnStyle }}>Shop Now</Button>
      </Grid>
    </Grid>
  )
}

export default HorizontalCard
