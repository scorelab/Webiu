import React from "react"
import Header from "../ui/header"
import SignUp from "../components/signUp"
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

const SignUpPage = () => {
  const classes = Styles()
  return (
    <>
      <Header brandName="Cloud Hotel" />
      <div className={classes.container}></div>
      <SignUp
        imgUrl="https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE2MjEzMzgx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        signInUrl="/login"
        signUpHandler={() => {}}
      />
    </>
  )
}

export default SignUpPage
