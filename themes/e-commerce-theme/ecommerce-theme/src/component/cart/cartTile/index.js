import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import { IconButton } from "@material-ui/core"

const CartTile = ({
  image,
  name,
  price,
  qty,
  subtractionHandler,
  additionHandler,
}) => {
  const classes = Styles()
  // const [quantity, setQuantity] = useState(qty)
  return (
    <Grid
      container
      classes={{ root: classes.container }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <img src={image} style={{ width: 150, height: 150 }} />
      </Grid>
      <Grid item>
        <Typography>{name}</Typography>
        <Typography>${price}</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          classes={{ root: classes.quantityWrapper }}
        >
          <Grid item>
            <Typography>Quantity</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent="space-around"
              classes={{ root: classes.iconContainer }}
            >
              <Grid item>
                <IconButton onClick={subtractionHandler}>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    size="1x"
                    color="#000"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography>{qty}</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={additionHandler}>
                  <FontAwesomeIcon icon={faSquarePlus} size="1x" color="#000" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartTile
