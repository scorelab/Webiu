import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "10px 35px",
      padding: "20px 0px",
    },
    width: "80%",
    padding: "25px 150px",
    margin: "20px 100px",
  },
  headerStyle: {
    marginBottom: "20px",
  },
  textFieldStyle: {
    width: "70%",
  },
  inputContainer: {
    margin: "10px",
  },
  cancelBtnStyle: {
    backgroundColor: theme.palette.common.grey,
    marginTop: "30px",
    padding: "10px 30px",
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.common.grey },
  },
  saveBtnStyle: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "30px",
    marginLeft: "50px",
    padding: "10px 30px",
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
  logoutBtnStyle: {
    backgroundColor: theme.palette.common.tomato,
    marginTop: "30px",
    padding: "10px 100px",
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.common.tomato },
  },
}))

export default Styles
