import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    border: `2px solid ${theme.palette.common.grey}`,
    borderRadius: 10,
    width: "250px",
  },
  imgStyle: {
    height: "150px",
    width: "246px",
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
  normalBtnStyle: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 20,
    textTransform: "none",
    color: theme.palette.primary.main,
    minWidth: "100px",
  },
  wrapper: {
    padding: "10px",
  },
  fullWidthContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  space: {
    marginTop: "10px",
  },
  iconStyle: { color: theme.palette.primary.main },
  detailStyle: { margin: "5px" },
  availableBtnStyle: {
    borderRadius: 20,
    backgroundColor: theme.palette.primary.main,
    color: props =>
      props.availability
        ? theme.palette.primary.light
        : theme.palette.common.tomato,
    "&:hover": { backgroundColor: theme.palette.primary.main },
    textTransform: "none",
  },
  bookBtnStyle: {
    backgroundColor: theme.palette.common.tomato,
    color: theme.palette.primary.light,
    borderRadius: 20,
    "&:hover": { backgroundColor: theme.palette.common.tomato },
    textTransform: "none",
  },
}))

export default Styles
