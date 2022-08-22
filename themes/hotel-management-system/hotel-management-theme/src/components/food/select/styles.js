import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  customOutline: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid black",
    },
  },
  menuItemStyle: {
    fontSize: "15px",
  },
}))

export default Styles
