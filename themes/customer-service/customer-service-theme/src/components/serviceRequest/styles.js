import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "80%",
    background: "linear-gradient(#8165EA 70%,#FFFFFF)",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    margin: "30px 125px",
    padding: "20px 100px",
  },
  datePicker: {
    color: theme.palette.primary.light,
  },
  outline: {
    color: theme.palette.primary.main,
  },
  wrapper: {
    marginLeft: "50px",
    marginTop: "30px",
  },
  space: {
    marginBottom: "20px",
  },
  spaceHorizontal: {
    marginRight: "100px",
  },
  btnStyle: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.light,
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.light },
  },
  bottomWrapper: {
    marginTop: "50px",
    marginBottom: "100px",
  },
}))

export default Styles
