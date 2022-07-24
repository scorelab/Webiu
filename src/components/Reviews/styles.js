import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    border: `2px solid ${theme.palette.primary.dark}`,
    marginTop: "50px",
    padding: "10px",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
    boxShadow: theme.shadows[5],
  },
  innerContainer: {
    backgroundColor: "#EFF1FA",
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
    padding: "30px",
  },
  iconSpace: {
    marginRight: "20px",
  },
  arrowSpace: {
    [theme.breakpoints.up("md")]: {
      margin: "0px 20px",
    },
  },
  dotStyle: {
    margin: "1px",
  },
}))

export default Styles
