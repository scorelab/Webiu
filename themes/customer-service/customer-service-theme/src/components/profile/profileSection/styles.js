import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    border: `2px solid ${theme.palette.primary.dark}`,
    marginTop: "50px",
    padding: "10px",
    boxShadow: theme.shadows[5],
  },
  iconStyle: {
    margin: "20px",
  },
  paraStyle: {
    padding: "10px 20px",
  },
  textStyle: {
    paddingLeft: "10px",
  },
}))

export default Styles
