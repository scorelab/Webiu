import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  textField: {
    width: "100%",
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius,
  },
  SearchAdornment: {
    cursor: "grab",
  },
}))

export default Styles
