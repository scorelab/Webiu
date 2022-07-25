import React, { useState } from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Styles from "./styles"

const ShipmentDetail = ({ initialState, attributes }) => {
  const classes = Styles()
  const [inputValues, setInputValues] = useState(initialState)

  const inputs = attributes.map(attribute => {
    return (
      <Grid
        item
        container
        classes={{ root: classes.inputContainer }}
        justifyContent="space-between"
        alignItems="center"
        key={attribute.name}
      >
        <Grid item>
          <Typography>{attribute.value}</Typography>
        </Grid>
        <Grid item classes={{ root: classes.textFieldStyle }}>
          <TextField
            fullWidth
            id="fullWidth"
            label={
              <Typography color="#9e9e9e" variant="body2">
                {attribute.value}
              </Typography>
            }
            variant="filled"
            size="small"
            onChange={e => {
              setInputValues({
                ...inputValues,
                [attribute.name]: e.target.value,
              })
            }}
          />
        </Grid>
      </Grid>
    )
  })
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid
        item
        container
        justifyContent="center"
        classes={{ root: classes.headerStyle }}
      >
        <Typography variant="h3">Shipping & Billing</Typography>
      </Grid>
      {inputs}
      <Grid item container justifyContent="center">
        <Button
          onClick={() => console.log(inputValues)}
          classes={{ root: classes.btnStyle }}
        >
          <Typography variant="h4">Confirm & Pay</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

ShipmentDetail.propTypes = {
  initialState: PropTypes.object,
  attributes: PropTypes.array,
}

export default ShipmentDetail
