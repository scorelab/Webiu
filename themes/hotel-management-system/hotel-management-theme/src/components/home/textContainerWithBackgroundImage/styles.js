import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => {
  return {
    container: {
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url("https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MDgwNzg0Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080")`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: props => props.height,
    },
    space: {
      marginTop: "125px",
      marginLeft: "300px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "50px",
        paddingLeft: "20px",
        marginTop: "0px",
        marginLeft: "0px",
      },
    },
  }
})

export default Styles
