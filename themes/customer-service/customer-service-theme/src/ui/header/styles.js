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
    width: 200,
    minWidth: 200,
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
