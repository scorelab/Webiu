import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "800px",
    marginTop: "20px",
  },
  btnStyle: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    borderRadius: 5,
    "&:hover": { backgroundColor: theme.palette.secondary.main },
    textTransform: "none",
  },
  space: {
    marginTop: "20px",
  },
}))

export default Styles
