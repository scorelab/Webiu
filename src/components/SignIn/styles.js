import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  outerContainer: {
    height: "650px",
    width: "650px",
    margin: "50px 0px",
    backgroundColor: theme.palette.primary.main,
  },
  innerContainer: {
    backgroundColor: "#fff",
    margin: "50px",
    height: "550px",
    width: "550px",
  },
  iconContainer: {
    margin: "20px 0px",
  },
  btn: {
    borderRadius: 20,
    marginTop: "50px",
    width: "400px",
  },
  text: {
    textTransform: "none",
  },
  textField: {
    width: "350px",
    padding: "10px",
  },
  bottomText: {
    marginTop: "100px",
  },
  EmailAdornment: {},
  input: {},
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}))

export default Styles
