import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMinusSquare,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Styles from "./styles"

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
                    icon={faMinusSquare}
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
                  <FontAwesomeIcon icon={faPlusSquare} size="1x" color="#000" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={removeHandler}>
              <FontAwesomeIcon icon={faTrash} size="1X" color="#ff0000" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

CartTile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  qty: PropTypes.string,
  subtractionHandler: PropTypes.func,
  additionHandler: PropTypes.func,
  removeHandler: PropTypes.func,
}

export default CartTile
