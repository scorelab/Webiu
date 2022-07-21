import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  background: {
    height: "100vh",
    width: "100%",
    background: theme.palette.primary.main,
  },
  container: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 10,
    height: "600px",
    width: "80%",
    marginTop: "50px",
  },
  firstWrapper: {
    height: "100%",
    width: "50%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  secondWrapper: {
    backgroundColor: "#FAF5FF",
    height: "100%",
    width: "50%",
    padding: "0px 50px",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  wrapper: {
    height: "600px",
    width: "100%",
    borderRadius: 10,
  },
  headerStyle: {
    marginTop: "30px",
  },
  divider: {
    width: "100px",
    backgroundColor: theme.palette.primary.contrastText,
  },
  space: {
    margin: "20px 0px",
  },
  textFieldStyle: {
    borderRadius: 5,
  },
  displayStyle: {
    width: "60%",
    margin: "10px 0px",
  },
  inputStyle: {
    color: theme.palette.primary.dark,
    fontSize: 18,
  },
  inputLabelStyle: {
    color: theme.palette.primary.contrastText,
    fontSize: 15,
  },
  btnStyle: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    textTransform: "none",
    width: "100%",
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
  btnIconStyle: {
    padding: "0px 15px",
  },
}))

export default Styles
