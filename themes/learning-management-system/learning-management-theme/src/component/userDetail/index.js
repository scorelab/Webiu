import React, { useState, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"
import { useMediaQuery } from "@material-ui/core"

const UserDetail = () => {
  const classes = Styles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const [inputValues, setInputValues] = useState({
    IndexNo: "",
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    Address: "",
    GuardianName: "",
    GuardianMobileNumber: "",
  })
  const attributes = [
    { name: "IndexNo", value: "Index No", type: "text" },
    { name: "FirstName", value: "First Name", type: "text" },
    { name: "LastName", value: "Last Name", type: "text" },
    { name: "Email", value: "Email", type: "email" },
    { name: "MobileNumber", value: "Mobile Number", type: "number" },
    { name: "Address", value: "Address", type: "text" },
    { name: "GuardianName", value: "Guardian Name", type: "text" },
    {
      name: "GuardianMobileNumber",
      value: "Guardian Mobile Number",
      type: "number",
    },
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
            type={attribute.type}
            label={
              <Typography color="#9e9e9e" variant="h7">
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
        <FontAwesomeIcon icon={faUserCircle} size="5x" />
      </Grid>
      {inputs}
      <Grid item container justifyContent="center">
        <Grid item>
          <Button onClick={() => {}} classes={{ root: classes.cancelBtnStyle }}>
            <Typography variant="h6">Cancel</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => {}} classes={{ root: classes.saveBtnStyle }}>
            <Typography variant="h6">Save</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item>
          <Button onClick={() => {}} classes={{ root: classes.logoutBtnStyle }}>
            <Typography variant="h6">Log out</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserDetail
