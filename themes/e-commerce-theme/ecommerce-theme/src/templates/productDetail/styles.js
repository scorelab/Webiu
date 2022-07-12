import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  mainContainer: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      margin: "50px 5px",
    },
    margin: "50px 50px",
  },
  detailContainer: {
    border: `4px solid ${theme.palette.primary.main}`,
  },
  wrapper: {
    margin: "30px 10px",
  },
  container: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "310px",
    },
  },
  cartAdditionStyle: {
    width: "150px",
  },
  btnStyle: {
    backgroundColor: "#31BBE8",
    borderRadius: 10,
    color: "#fff",
    textTransform: "none",
    "&:hover": { backgroundColor: "#31BBE8" },
  },
  buyBtnStyle: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    color: "#fff",
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
  btnContainer: {
    width: "250px",
    margin: "100px",
  },
}))

export default Styles
