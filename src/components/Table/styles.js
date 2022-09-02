import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  cellStyle: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    fontSize: 18,
  },
  rowStyle: {
    "& > :nth-child(odd)": {
      backgroundColor: theme.palette.common.grey,
    },
  },
}))

export default Styles
