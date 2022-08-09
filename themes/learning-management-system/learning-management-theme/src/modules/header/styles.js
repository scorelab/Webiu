import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
  },
  iconStyle: {
    height: "100px",
    width: "100px",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "50%",
    padding: "10px",
  },
  text: {
    ...theme.typography.h2,
    color: theme.palette.primary.light,
    marginBottom: "5px",
  },
  columnWrapper: {
    marginLeft: "50px",
  },
  space: {
    marginRight: "50px",
  },
}))

export default Styles
