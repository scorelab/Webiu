import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    boxShadow: theme.shadows[5],
    padding: "10px",
    margin: "10px 0px",
    width: "80%",
    cursor: "pointer",
  },
  textStyle: {
    ...theme.typography.h3,
    fontSize: 18,
  },
}))

export default Styles
