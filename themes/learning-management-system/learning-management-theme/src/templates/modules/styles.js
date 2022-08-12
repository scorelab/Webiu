import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  headerStyle: {
    backgroundColor: theme.palette.primary.lightvariant,
    height: "150px",
    padding: "0px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subModuleStyle: {
    backgroundColor: theme.palette.primary.main,
    padding: "0px 10px",
    minHeight: "80px",
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  wrapper: {
    minHeight: "100vh",
  },
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
  activeText: {
    color: "blue",
  },
  disabledText: {},
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    backgroundColor: "blue",
    textTransform: "none",
    color: "white",
    "&:hover": { backgroundColor: "blue" },
  },
}))

export default Styles
