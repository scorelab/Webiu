import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "10px 35px",
      padding: "20px 10px",
    },
    width: "80%",
    padding: "25px",
    margin: "20px 100px",
    boxShadow: theme.shadows[5],
    border: "1px solid #000",
  },
  head:{
    [theme.breakpoints.down("sm")]:{
      marginLeft:"0",
      width:"60vw",
    },
    marginLeft:"50px",
      width:"80vw",
  },
  heading:{
    [theme.breakpoints.down("sm")]:{
      marginLeft:"50px",
      width:"50vw",
      color:"black",
      fontSize:"30px"
    },
    marginLeft:"410px",
      width:"80vw",
      color:"black",
      fontSize:"30px"
  },
  space: {
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      flexDirection:"column",
    },
    marginTop: "20px",
    marginBottom:"40px",
    marginLeft:"50px",
    width:"max-content",
    gap:"20px",
    alignItems:"center"
  },
  wrapper: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  spaceWrapper: {
    marginTop: "-40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  pad:{
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
    marginLeft:"20px",
    width:"250px",
    justifyContent:"center",
    alignItems:"center",
    height:"300px"
  },
  
  textGrid:{
    width:"150px",
    textAlign:"center",
    justifyContent:"center",
    fontFamily:"sans-serif"
  }
}))

export default Styles
