import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  inputStyle: {
    "&::placeholder": {
      color: theme.palette.primary.light,
      fontSize: 15,
    },
    color: theme.palette.primary.light,
    fontSize: 18,
  },
  underlineStyle: {
    "& .MuiInput-underline:before,& .MuiInput-underline:hover:not(& .Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
    },
    "& .MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  rowWrapper: {
    marginBottom: "30px",
  },
}))

export default Styles
