import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  notchedOutline: {
    borderColor: theme.palette.primary.dark,
    borderRadius: theme.shape.borderRadius,
  },
  SearchAdornment: {
    cursor: "grab",
  },
}))

export default Styles
