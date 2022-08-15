import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    padding: "20px 10px",
  },
  wrapper: {
    paddingLeft: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
    },
  },
  cardGroup: {
    marginTop: "20px",
  },
}))

export default Styles
