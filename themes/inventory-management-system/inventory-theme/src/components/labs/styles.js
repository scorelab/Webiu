import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  itemContainer: {
    "& > *": {
      marginRight: "calc((100% - (300px * 3))/3)",
      marginBottom: "40px",
    },
    "& > :nth-child(3n)": {
      marginRight: 0,
    },
  },
  container: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  space: {
    marginTop: "20px",
  },
}))

export default Styles
