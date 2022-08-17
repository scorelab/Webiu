import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  appBarStyle: {
    width: props => props.open && `calc(100% - 240px)`,
    marginLeft: props => props.open && "240px",
  },
  headerTextStyle: {
    marginLeft: "50px",
  },
  drawerStyle: {
    width: "240px",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    flexShrink: 0,
  },
  dividerStyle: {
    background: theme.palette.primary.light,
    marginTop: "15px",
  },
  listItemStyle: {
    cursor: "pointer",
    "&$selected": {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": { backgroundColor: theme.palette.secondary.main },
    },
  },
  labelTextStyle: {
    color: theme.palette.primary.light,
  },
  subWrapper: {
    marginLeft: "60px",
    cursor: "pointer",
  },
  selected: {},
}))

export default Styles
