import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  orderContainer: {
    width: "30%",
    padding: "25px 25px",
    borderRadius: 10,
    backgroundColor: "#FBF3EA",
    boxShadow: theme.shadows[5],
  },
  headerStyle: {
    marginBottom: "20px",
  },
  btnContainer: {
    marginTop: "30px",
  },
  btnStyle: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px",
    textTransform: "none",
    "&:hover": { backgroundColor: "#24b7a1" },
  },
}))

export default Styles
