import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "60%",
    border: "1px solid #000",
    height: "200px",
    margin: "10px",
  },
  ratingText: {
    ...theme.typography.h2,
    color: theme.palette.common.grey,
    marginTop: "20px",
  },
  space: {
    marginLeft: "10px",
  },
  innerContainer: {
    padding: "10px",
  },
  btnStyle: {
    margin: "10px",
  },
  detailStyle: { margin: "5px" },
  iconStyle: { paddingLeft: "5px", paddingRight: "5px" },
  availableBtnStyle: {
    borderRadius: 20,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,

    "&:hover": { backgroundColor: theme.palette.primary.main },
    textTransform: "none",
  },
  imgStyle: { width: "100%", height: "200px" },
}))

export default Styles
