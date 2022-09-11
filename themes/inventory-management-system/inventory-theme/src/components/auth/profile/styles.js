import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  iconStyle: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  container: { width: "40%", marginLeft: "10%" },
  valueStyle: { paddingLeft: "10px" },
  rowStyle: { width: "40%" },
  btnStyle: {
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    textTransform: "none",
    fontWeight: "bold",
    width: "100%",
    marginTop: "20px",
  },
  pwdBtnStyle: {
    border: `2px solid ${theme.palette.common.hotpink}`,
    color: theme.palette.common.hotpink,
    textTransform: "none",
    fontWeight: "bold",
    width: "100%",
    marginTop: "20px",
  },
  signOutBtnStyle: {
    border: `2px solid ${theme.palette.common.tomato}`,
    color: theme.palette.common.tomato,
    textTransform: "none",
    fontWeight: "bold",
    width: "100%",
    marginTop: "20px",
  },
}))

export default Styles
