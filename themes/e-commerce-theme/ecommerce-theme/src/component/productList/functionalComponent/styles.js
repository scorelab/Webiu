import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  functionContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "50px",
    // height: "auto",
    borderRadius: "10px 10px 0px 0px",
  },
}))

export default Styles
