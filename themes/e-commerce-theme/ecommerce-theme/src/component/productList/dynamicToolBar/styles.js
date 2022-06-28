import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  toolBar: {
    marginTop: "5rem",
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "auto",
    marginBottom: "5rem",
  },
}))

export default Styles
