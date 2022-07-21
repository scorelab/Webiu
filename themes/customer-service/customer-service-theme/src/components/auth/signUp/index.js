import React, { useState } from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Divider from "@mui/material/Divider"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import SignUpIcon from "../../../../assets/images/signUp.svg"
import Styles from "./styles"

const SignUp = () => {
  const classes = Styles()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const emailHandler = event => {
    setEmail(event.target.value)
  }
  const nameHandler = event => {
    setName(event.target.value)
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }
  const confirmPasswordHandler = event => {
    setConfirmPassword(event.target.value)
  }
  const submitHandler = () => {
    console.log(email)
    console.log(name)
    console.log(password)
    console.log(confirmPassword)
  }
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      classes={{ root: classes.background }}
    >
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.container }}
      >
        <Grid item>
          <Grid container direction="row" classes={{ root: classes.wrapper }}>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              classes={{ root: classes.firstWrapper }}
            >
              <Grid item>
                <Typography
                  classes={{ root: classes.headerStyle }}
                  variant="h2"
                >
                  Sign up for SolutionHub
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  alignItems="center"
                  classes={{ root: classes.space }}
                >
                  <Grid item>
                    <Divider classes={{ root: classes.divider }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      Sign up with your email
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider classes={{ root: classes.divider }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item classes={{ root: classes.displayStyle }}>
                <TextField
                  InputProps={{
                    classes: { input: classes.inputStyle },
                  }}
                  InputLabelProps={{
                    classes: { root: classes.inputLabelStyle },
                  }}
                  label="Email"
                  variant="filled"
                  size="small"
                  fullWidth
                  onChange={emailHandler}
                />
              </Grid>
              <Grid item classes={{ root: classes.displayStyle }}>
                <TextField
                  InputProps={{
                    classes: { input: classes.inputStyle },
                  }}
                  InputLabelProps={{
                    classes: { root: classes.inputLabelStyle },
                  }}
                  label="UserName"
                  variant="filled"
                  size="small"
                  fullWidth
                  onChange={nameHandler}
                />
              </Grid>
              <Grid item classes={{ root: classes.displayStyle }}>
                <TextField
                  InputProps={{
                    classes: { input: classes.inputStyle },
                  }}
                  InputLabelProps={{
                    classes: { root: classes.inputLabelStyle },
                  }}
                  label="Password"
                  variant="filled"
                  size="small"
                  fullWidth
                  type="password"
                  onChange={passwordHandler}
                />
              </Grid>
              <Grid item classes={{ root: classes.displayStyle }}>
                <TextField
                  classes={classes.root}
                  InputProps={{
                    classes: { input: classes.inputStyle },
                  }}
                  InputLabelProps={{
                    classes: { root: classes.inputLabelStyle },
                  }}
                  label="Confirm Password"
                  variant="filled"
                  size="small"
                  fullWidth
                  type="password"
                  onChange={confirmPasswordHandler}
                />
              </Grid>
              <Grid item classes={{ root: classes.displayStyle }}>
                <Button
                  classes={{ root: classes.btnStyle }}
                  onClick={submitHandler}
                >
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                      <FontAwesomeIcon
                        className={classes.btnIconStyle}
                        icon={faUserPlus}
                        size="1x"
                        inverse
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h4">Sign Up</Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="h6" align="center">
                  I agree to abide by SolutionHub Terms & Conditions and{" "}
                  <span style={{ textDecorationLine: "underline" }}>
                    Privacy & Policy
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" align="center">
                  Already have an account?{" "}
                  <span
                    style={{ textDecorationLine: "underline" }}
                    onClick={() => navigate("/signIn")}
                  >
                    Sign In here
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              classes={{ root: classes.secondWrapper }}
            >
              <Grid item>
                <Icon>
                  <img
                    src={SignUpIcon}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Icon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp
