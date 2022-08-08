import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  card: {
    height: "280px",
    width: "300px",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    margin: "20px",
    cursor: props => (props.isMember ? "pointer" : "not-allowed"),
  },
  image: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: "10px",
  },
  space: {
    marginTop: "5px",
  },
  text: {
    ...theme.typography.h2,
    color: theme.palette.common.grey,
  },
  bottomContainer: {
    width: "100%",
    marginTop: "20px",
  },
}))

export default Styles
