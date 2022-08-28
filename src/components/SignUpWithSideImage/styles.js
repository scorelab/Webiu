import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  heightStyle: {
    height: "100vh",
  },
  widthStyle: {
    width: "70%",
  },
  container: {
    paddingTop: "5%",
    height: "100vh",
  },
  textFieldStyle: {
    width: "70%",
    marginTop: "15px",
    marginBottom: "15px",
  },
  textStyle: {
    ...theme.typography.body2,
    fontWeight: "bold",
    color: "#2B2D2F",
  },
  btnStyle: {
    backgroundColor: theme.palette.common.hotpink,
    color: theme.palette.primary.light,
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.common.hotpink },
    width: "100%",
  },
  signupTextStyle: {
    textDecorationLine: "underline",
    cursor: "pointer",
  },
  imgStyle: { height: "100%", width: "100%" },
}))

export default Styles
