import React from "react"
import Header from "../ui/header"
import SignIn from "../components/signin"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "-8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}))

const LoginPage = () => {
  const classes = Styles()
  return (
    <>
      <Header brandName="Cloud Hotel" />
      <div className={classes.container}></div>
      <SignIn
        imgUrl="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjI3OTM5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        signUpUrl="/signUp"
        signInHandler={() => {}}
      />
    </>
  )
}

export default LoginPage
