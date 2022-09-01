import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "300px",
    height: "300px",
    boxShadow: theme.shadows[5],
  },
  imgContainer: {
    width: "300px",
    height: "150px",
  },
  wrapper: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  btnStyle: {
    border: `2px solid ${theme.palette.common.hotpink}`,
    color: theme.palette.common.hotpink,
    textTransform: "none",
    fontWeight: "bold",
  },
  space: {
    paddingTop: "10px",
  },
}))

export default Styles
