import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  space: {
    margin: "5px",
  },
  card: {
    height: props => props.height || "300px",
    width: props => props.width || "300px",
    boxShadow: theme.shadows[5],
  },
  title: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
  viewModel: {
    width: "150px",
    height: "30px",
    border: `2px solid ${theme.palette.secondary.light}`,
    cursor: "pointer",
  },
  image: {
    width: props => props.width || "300px",
    height: props => props.imageHeight || "180px",
  },
}))

export default Styles
