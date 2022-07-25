import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    display: "flex",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
    width: "50%",
    margin: "10px 10%",
    padding: "25px 25px",
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
  },
  quantityWrapper: {
    width: "250px",
  },
  iconContainer: {
    width: "120px",
  },
}))

export default Styles
