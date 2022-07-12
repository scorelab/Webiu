import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    marginTop: "200px",
  },
  imageCard: {
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "200px",
    },
    height: "300px",
    width: "300px",
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    "&:hover": { backgroundColor: "#fff" },
  },
  space: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 70px 0 70px",
    },
    margin: "0 200px 0px 200px",
  },
  imageStyle: {
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
    },
    width: 250,
    height: 250,
  },
}))

export default Styles
