import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    marginTop: "200px",
  },
  imageCard: {
    height: "300px",
    width: "300px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[5],
    "&:hover": { backgroundColor: "#fff" },
  },
  space: {
    margin: "0 200px 0px 200px" /* top | right | bottom | left */,
  },
}))

export default Styles
