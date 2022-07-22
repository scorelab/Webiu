import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    border: `2px solid ${theme.palette.primary.dark}`,
    marginTop: "50px",
    padding: "10px",
    boxShadow: theme.shadows[5],
  },
  innerContainer: {
    backgroundColor: "#EFF1FA",
    padding: "30px",
  },
  iconSpace: {
    marginRight: "20px",
  },
  arrowSpace: {
    margin: "0px 20px",
  },
  dotStyle: {
    margin: "1px",
  },
}))

export default Styles
