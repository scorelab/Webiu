import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "80%",
    backgroundColor: "#EDF2F7",
    padding: "25px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  viewProfileBtn: {
    backgroundColor: "#3388CE",
    borderRadius: 10,
    padding: "5px",
    textTransform: "none",
    margin: "5px",
    "&:hover": { backgroundColor: "#3388CE" },
  },
  hireBtn: {
    backgroundColor: "#58C78E",
    borderRadius: 10,
    padding: "5px",
    textTransform: "none",
    margin: "5px",
    "&:hover": { backgroundColor: "#58C78E" },
  },
  location: { paddingRight: "5px" },
}))

export default Styles
