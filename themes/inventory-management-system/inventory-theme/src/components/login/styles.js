import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    height: "80vh",
  },
  btnStyle: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.secondary.main },
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  widthStyle: {
    width: "100%",
  },
  typeWriterWrapper: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2B2D2F",
  },
  wrapper: {
    width: "400px",
  },
  logoStyle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}))

export default Styles
