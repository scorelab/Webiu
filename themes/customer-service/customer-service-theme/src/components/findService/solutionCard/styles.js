import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  card: {
    height: 300,
    width: 300,
    borderRadius: 10,
    margin: "10px 70px",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.primary.main,
  },
  textWrapper: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px 0px",
  },
}))

export default Styles
