import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.lightvariant,
    width: "80%",
    paddingLeft: "10px",
    margin: "5px 60px",
  },
}))

export default Styles
