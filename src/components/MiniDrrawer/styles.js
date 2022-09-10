import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => {
  return {
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: props => props.open && "240px",
      width: props => props.open && `calc(100% - 240px)`,
      transition: props =>
        props.open &&
        theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    barBtnStyle: {
      marginRight: 5,
      display: props => props.open && "none",
    },
    headerTextStyle: {
      marginLeft: "50px",
    },
    listItemStyle: {
      minHeight: "60px",
    },
    listTextStyle: {
      color: theme.palette.common.hotpink,
    },
  }
})

export default Styles
