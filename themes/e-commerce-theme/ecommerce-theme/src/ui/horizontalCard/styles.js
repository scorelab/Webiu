import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  containerStyle: {
    display: "flex",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    width: "70%",
    margin: "10px 10%",
    padding: "25px 25px",
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
  },
  btnStyle: {
    backgroundColor: "red",
    borderRadius: 10,
    // marginLeft: "300px",
    // [theme.breakpoints.down("md")]: {
    //   marginLeft: "100px",
    // },
    "&:hover": { backgroundColor: "red" },
  },
  sty: { backgroundColor: "red", width: "100%", margin: "10px 0px" },
}))

export default Styles
