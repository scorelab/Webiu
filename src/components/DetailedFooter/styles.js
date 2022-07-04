import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  iconStyle: {
    color: theme.palette.primary.light,
  },
  footerStyle: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
  },
  linkContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
  },
  linkStyle: {
    width: 300,
  },
  container: {
    padding: 20,
  },
  iconStyle: {
    height: 5,
  },
}))

export default Styles
