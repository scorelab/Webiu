import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import Styles from "./styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const OrderSummery = ({ items, total }) => {
  const classes = Styles()
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.orderContainer }}
    >
      <Grid item container>
        <Grid item classes={{ root: classes.headerStyle }}>
          <Typography variant="h3">Order Summery</Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Typography>Items</Typography>
        </Grid>
        <Grid item>
          <Typography>{items}</Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Typography>Total</Typography>
        </Grid>
        <Grid item>
          <Typography>${total}</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        classes={{ root: classes.btnContainer }}
      >
        <Grid item>
          <Button
            component={Link}
            to="/shipping"
            classes={{ root: classes.btnStyle }}
          >
            <Typography variant="h4">Proceed To Checkout</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrderSummery
