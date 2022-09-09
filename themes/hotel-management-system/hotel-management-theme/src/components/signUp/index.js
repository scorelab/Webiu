import React, { useState } from "react"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import Styles from "./styles"

const SignUp = ({ imgUrl, signInUrl, signUpHandler }) => {
  const classes = Styles()
  const [inputValues, setInputValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [check, setCheck] = useState(false)

  console.log("check", check)
  return (
    <Grid container direction="row">
      <Grid item xs={6} classes={{ root: classes.heightStyle }}>
        <img src={imgUrl} className={classes.imgStyle} />
      </Grid>
      <Grid item xs={6} classes={{ root: classes.container }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <FontAwesomeIcon icon={faLock} size="3x" color="#EE64BD" />
          </Grid>
          <Grid item>
            <Typography variant="h3">Sign Up</Typography>
          </Grid>
          <Grid item classes={{ root: classes.textFieldStyle }}>
            <TextField
              fullWidth
              id="fullWidth"
              type="text"
              label={
                <Typography classes={{ root: classes.textStyle }}>
                  Username
                </Typography>
              }
              InputProps={{ style: { fontSize: 18 } }}
              style={{ backgroundColor: "#CEDBE8" }}
              variant="filled"
              size="small"
              onChange={e => {
                setInputValues({
                  ...inputValues,
                  ["userName"]: e.target.value,
                })
              }}
            />
          </Grid>
          <Grid item classes={{ root: classes.textFieldStyle }}>
            <TextField
              fullWidth
              id="fullWidth"
              type="text"
              label={
                <Typography classes={{ root: classes.textStyle }}>
                  Email
                </Typography>
              }
              InputProps={{ style: { fontSize: 18 } }}
              style={{ backgroundColor: "#CEDBE8" }}
              variant="filled"
              size="small"
              onChange={e => {
                setInputValues({
                  ...inputValues,
                  ["email"]: e.target.value,
                })
              }}
            />
          </Grid>
          <Grid item classes={{ root: classes.textFieldStyle }}>
            <TextField
              fullWidth
              id="fullWidth"
              type="password"
              label={
                <Typography classes={{ root: classes.textStyle }}>
                  Password
                </Typography>
              }
              InputProps={{ style: { fontSize: 18 } }}
              style={{ backgroundColor: "#CEDBE8" }}
              variant="filled"
              size="small"
              onChange={e => {
                setInputValues({
                  ...inputValues,
                  ["password"]: e.target.value,
                })
              }}
            />
          </Grid>
          <Grid item classes={{ root: classes.textFieldStyle }}>
            <TextField
              fullWidth
              id="fullWidth"
              type="password"
              label={
                <Typography classes={{ root: classes.textStyle }}>
                  Confirm Password
                </Typography>
              }
              InputProps={{ style: { fontSize: 18 } }}
              style={{ backgroundColor: "#CEDBE8" }}
              variant="filled"
              size="small"
              onChange={e => {
                setInputValues({
                  ...inputValues,
                  ["confirmPassword"]: e.target.value,
                })
              }}
            />
          </Grid>
          <Grid item classes={{ root: classes.widthStyle }}>
            <FormControlLabel
              control={
                <Checkbox color="primary" onClick={() => setCheck(!check)} />
              }
              label="I agree to all terms and conditions"
            />
          </Grid>
          <Grid item classes={{ root: classes.widthStyle }}>
            <Button
              classes={{ root: classes.btnStyle }}
              onClick={signUpHandler}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item classes={{ root: classes.widthStyle }}>
            <Typography variant="h6">
              Already have an account?{" "}
              <span
                className={classes.signupTextStyle}
                onClick={() => navigate(signInUrl)}
              >
                Sign in Here
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp
