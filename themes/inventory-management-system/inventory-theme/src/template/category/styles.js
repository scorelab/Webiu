import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  space: {
    marginTop: "20px",
  },
}))

export default Styles
