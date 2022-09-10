import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "-8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  wrapper: {
    marginLeft: props => props.open && "240px",
    transition: props =>
      props.open &&
      theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
  },
}))

export default Styles
