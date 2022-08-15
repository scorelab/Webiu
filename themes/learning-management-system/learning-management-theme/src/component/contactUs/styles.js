import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "10px 35px",
      padding: "20px 10px",
    },
    width: "80%",
    padding: "25px",
    margin: "20px 100px",
    boxShadow: theme.shadows[5],
    border: "1px solid #000",
  },
  space: {
    marginTop: "20px",
  },
  wrapper: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  spaceWrapper: {
    marginTop: "-40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
}))

export default Styles
