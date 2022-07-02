import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  containerStyle: {
    height: "420px",
    width: "300px",
    margin: "10px 30px",
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
  },
  innerContainerStyle: {
    width: "260px",
    height: "380px",
    margin: "20px",
  },
  imageContainerStyle: {
    width: 260,
    height: 310,
    overflow: "hidden",
  },
  imageStyle: {
    width: 260,
    height: 310,
    "&:hover": { width: 300, height: 360 },
  },
}))

export default Styles
