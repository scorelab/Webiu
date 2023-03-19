import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "80%",
    height: "900px",
    position: "relative",
    top:"50px",
    background: "linear-gradient(#8165EA 70%,#FFFFFF)",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    justifyContent: "center",
    // alignItems: "center",
    [theme.breakpoints.up("md")]: {
      margin: "30px 125px",
      padding: "20px 100px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0px",
      padding: "20px 5px",
      width: "100%",
    },
  },
  headerStyle: {
    // marginTop: "10px",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "10px",
    paddingBottom: "20px",
    
  },
  wrapper: {
    // paddingLeft: "50px",
  },
  space: {
    // marginRight: "100px",
    paddingLeft: "72px"
  },
  btnStyle: {
    borderRadius: 10,
    marginLeft: "25%",
    backgroundColor: theme.palette.primary.light,
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.light },
  },
  bottomWrapper: {
    // marginTop: "50px",
    // marginBottom: "100px",
    
  },
  
}))

export default Styles
