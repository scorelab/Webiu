import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquarePlus,
  faSquareMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import { IconButton, useMediaQuery } from "@material-ui/core"

const CartTile = ({
  image,
  name,
  price,
  qty,
  subtractionHandler,
  additionHandler,
  removeHandler,
}) => {
  const classes = Styles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))
  return (
    <Grid
      container
      classes={{ root: classes.container }}
      justifyContent={matchesMD ? "flex-start" : "space-between"}
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
          justifyContent={matchesMD ? "flex-start" : "space-around"}
          classes={{ root: classes.quantityWrapper }}
        >
          <Grid item>
            <Typography>Quantity</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent={matchesMD ? "flex-start" : "space-around"}
              classes={{ root: classes.iconContainer }}
              // direction={matchesMD ? "column" : "row"}
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
              <Grid item>
                <IconButton onClick={removeHandler}>
                  <FontAwesomeIcon icon={faTrash} size="1X" color="#ff0000" />
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
