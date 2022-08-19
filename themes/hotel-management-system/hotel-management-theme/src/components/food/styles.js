import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    border: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: 10,
    width: "200px",
    margin: "10px",
  },
  imgStyle: {
    height: "150px",
    width: "196px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  divideStyle: {
    background: theme.palette.primary.dark,
  },
  priceStyle: {
    ...theme.typography.h6,
    color: theme.palette.common.tomato,
  },
  btnStyle: {
    backgroundColor: theme.palette.primary.main,
    color: props =>
      props.availability
        ? theme.palette.primary.light
        : theme.palette.common.tomato,
    borderRadius: 10,
    "&:hover": { backgroundColor: theme.palette.primary.main },
    textTransform: "none",
  },
  wrapper: {
    padding: "0px 10px 10px 10px",
  },
  space: {
    marginTop: "10px",
  },
}))

export default Styles
