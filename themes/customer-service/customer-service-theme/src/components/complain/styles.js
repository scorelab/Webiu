import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "80%",
    height: "500px",
    background: "linear-gradient(#8165EA 70%,#FFFFFF)",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    margin: "30px 125px",
    padding: "20px 100px",
  },
  wrapper: {
    padding: "50px 0px",
  },
  bottomWrapper: {
    marginBottom: "50px",
  },
  textField: {
    width: "350px",
  },
  inputStyle: {
    "&::placeholder": {
      color: theme.palette.primary.light,
      fontSize: 15,
    },
    color: theme.palette.primary.light,
    fontSize: 18,
  },
  btnStyle: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.light,
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.light },
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}))

export default Styles
