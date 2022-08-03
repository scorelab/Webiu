import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  statisticName: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Inter",
    color: theme.palette.common.blue,
    marginTop: "-20px",
  },
  statisticValue: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Inter",
    color: theme.palette.common.tomato,
  },
  container: {
    margin: "10px 0px",
  },
}))

export default Styles
