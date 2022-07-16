import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  wrapper: {
    height: "500px",
  },
  header: {
    backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "400px",
  },
  textContainer: {
    backgroundColor: theme.palette.primary.alphaDark,
    textTransform: "none",
    padding: "10px 50px",
    "&:hover": { backgroundColor: theme.palette.primary.alphaDark },
  },
  favourite: {
    // height: 600,
  },
  contact: {
    // height: 600,
  },
}))

export default Styles
