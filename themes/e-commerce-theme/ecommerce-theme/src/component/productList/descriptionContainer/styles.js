import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
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
}))

export default Styles
