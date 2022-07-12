import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Styles from "./styles"
import { useMediaQuery } from "@material-ui/core"

const ShipmentDetail = () => {
  const classes = Styles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const [inputValues, setInputValues] = useState({
    Name: "",
    Address: "",
    PostalId: "",
    MobileNumber: "",
    Email: "",
  })
  const attributes = [
    { name: "Name", value: "Name" },
    { name: "Address", value: "Address" },
    { name: "PostalId", value: "Postal Id" },
    { name: "MobileNumber", value: "Mobile Number" },
    { name: "Email", value: "Email" },
  ]
  const inputs = attributes.map(attribute => {
    return (
      <Grid
        item
        container
        classes={{ root: classes.inputContainer }}
        direction={matchesMD ? "column" : "row"}
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

export default ShipmentDetail
