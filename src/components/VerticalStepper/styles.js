import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
  },
  stepWrapper: {
    color: "grey",
    "& $completed": {
      color: "lightgreen",
    },
    "& $active": {
      color: "#aa6c39",
    },
    "& $disabled": {
      color: "grey",
    },
  },
  stepperLabel: {
    color: "white",
    fontWeight: "bold",
    "& $completedText": {
      color: "white",
      fontWeight: "bold",
    },
    "& $activeText": {
      color: "white",
      fontWeight: "bold",
    },
    "& $disabledText": {
      color: "white",
      fontWeight: "bold",
    },
  },
  active: {},
  completed: {},
  disabled: {},
  completedText: {},
  activeText: {},
  disabledText: {},
}))

export default Styles
