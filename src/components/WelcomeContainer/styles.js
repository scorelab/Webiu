import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  decoratedText: {
    ...theme.typography.h1,
    color: theme.palette.secondary.light,
  },
  container: {
    backgroundColor: "#F5F5F5",
    padding: "20px 200px",
  },
  space: {
    marginBottom: "20px",
  },
}))

export default Styles
