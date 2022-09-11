import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
    marginTop: -10,
  },
  inputLabelRoot: {
    color: theme.palette.primary.dark,
    fontSize: 18,
  },
  underline: {
    "& .MuiInput-underline:after,": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    "& .MuiInput-underline:before,& .MuiInput-underline:hover:not(& .Mui-disabled):before,": {
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
      marginBottom: "10px",
    },
    color: theme.palette.primary.dark,
  },
  iconStyle: {
    color: theme.palette.primary.dark,
  },
  rowWrapper: {
    marginBottom: "30px",
  },
}))

export default Styles
