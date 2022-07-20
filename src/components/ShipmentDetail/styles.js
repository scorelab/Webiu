import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "80%",
    padding: "25px 150px",
    margin: "20px 100px",
    borderRadius: 10,
    backgroundColor: "#FBF3EA",
    boxShadow: theme.shadows[5],
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
  btnStyle: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "50px",
    padding: "10px",
    textTransform: "none",
    "&:hover": { backgroundColor: "#24b7a1" },
  },
}))

export default Styles
