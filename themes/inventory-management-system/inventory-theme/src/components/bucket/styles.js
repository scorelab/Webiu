import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    marginTop: "10px",
    width: "100%",
  },
  textAreaStyle: {
    width: "100%",
    marginTop: "10px",
  },
  btnStyle: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
}))

export default Styles
