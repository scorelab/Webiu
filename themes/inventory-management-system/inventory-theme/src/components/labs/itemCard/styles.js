import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "70%",
    minHeight: "150px",
    boxShadow: theme.shadows[5],
    margin: "20px",
  },
  imgStyle: {
    width: "200px",
    height: "100%",
  },
  btnStyle: {
    border: `2px solid ${theme.palette.common.hotpink}`,
    color: theme.palette.common.hotpink,
    textTransform: "none",
    fontWeight: "bold",
    marginTop: "10px",
  },
  innerWrapper: {
    padding: "10px",
    height: "100%",
  },
  space: {
    paddingTop: "20px",
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}))

export default Styles
