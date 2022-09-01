import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  breadcrumbs: {
    fontSize: 24,
    paddingBottom: theme.spacing(3),
    textDecoration: "None",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.hotpink,
  },
}))

export default Styles
