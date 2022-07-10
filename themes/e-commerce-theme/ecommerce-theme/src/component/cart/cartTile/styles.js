import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    display: "flex",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
    width: "100%",
    margin: "10px 10%",
    padding: "25px 25px",
    borderRadius: 10,
    backgroundColor: "#FBF3EA",
    boxShadow: theme.shadows[5],
  },
  quantityWrapper: {
    width: "350px",
  },
  iconContainer: {
    width: "150px",
  },
}))

export default Styles
