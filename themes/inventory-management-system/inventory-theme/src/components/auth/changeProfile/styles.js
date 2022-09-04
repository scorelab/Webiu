import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  iconStyle: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  rowStyle: { width: "40%" },
  btnStyle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    textTransform: "none",
    fontWeight: "bold",
    width: "100%",
    marginTop: "20px",
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
  cancelBtnStyle: {
    backgroundColor: theme.palette.common.hotpink,
    color: theme.palette.primary.light,
    textTransform: "none",
    fontWeight: "bold",
    width: "100%",
    marginTop: "20px",
    "&:hover": { backgroundColor: theme.palette.common.hotpink },
  },
}))

export default Styles
