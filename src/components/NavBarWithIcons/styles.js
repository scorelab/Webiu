import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  decoratedHeader: {
    ...theme.typography.h1,
    color: theme.palette.primary.main,
  },
  iconStyle: {
    color: theme.palette.primary.main,
    padding: "0 15px",
  },
  tabsStyle: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  tabStyle: {
    width: 120,
    minWidth: 120,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  drawerStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemTextStyle: {
    color: theme.palette.primary.light,
  },
}))

export default Styles
