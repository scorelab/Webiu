import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  toolBarStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  decoratedHeader: {
    ...theme.typography.h1,
    color: theme.palette.primary.main,
  },
  iconStyle: {
    color: theme.palette.primary.main,
    marginLeft: "auto",
  },
  tabsStyle: {
    marginLeft: "auto",
  },
  tabStyle: {
    width: 150,
    minWidth: 150,
    color: theme.palette.common.grey,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
    textTransform: "none",
  },
  drawerStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemTextStyle: {
    color: theme.palette.primary.light,
  },
  btnStyle: {
    backgroundColor: theme.palette.primary.main,
    margin: "0px 20px",
    width: 100,
    textTransform: "none",
    borderRadius: 5,
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
}))

export default Styles
