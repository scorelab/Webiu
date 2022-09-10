import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  appBarStyle: {
    width: props => props.open && `calc(100% - 240px)`,
    marginLeft: props => props.open && "240px",
  },
  headerTextStyle: {
    marginLeft: "50px",
  },
}))

export default Styles
