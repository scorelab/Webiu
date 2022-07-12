import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  main: {
    position: "relative",
  },
  descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "150px",
    width: "60%",
    borderRadius: 25,
    margin: "10px",
    padding: "20px",
  },
  textStyle: {
    color: "#fff",
  },
  button: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  selectedBtn: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.lightvariant,
    },
  },
  buttonGroupStyle: {
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      right: 0,
      bottom: 0,
      marginRight: "0px",
      marginBottom: "10px",
    },
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: "50px",
    marginBottom: "25px",
  },
}))

export default Styles
