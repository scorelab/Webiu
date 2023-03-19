import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    width: "80%",
    height: "calc(120vh - 40px)",
    position: "relative",
    top: "55px",
    right: "50px",
    background: "linear-gradient(#8165EA 70%,#FFFFFF)",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
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
    marginTop: "1px",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "2px",
    paddingBottom: "10px",
    
  },
  wrapper: {
    paddingTop: "5px",
  },
  space: {
    paddingLeft: "72px"
  },
  btnStyle: {
    borderRadius: 10,
    marginLeft: "25%",
    position: "relative",
    top:"2px",
    backgroundColor: theme.palette.primary.light,
    textTransform: "none",
    "&:hover": { backgroundColor: theme.palette.primary.light },
  },
  bottomWrapper: {
  
    
  },
  
}))

export default Styles
