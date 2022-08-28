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

const SignIn = ({ imgUrl, signUpUrl, signInHandler }) => {
  const classes = Styles()
  const [inputValues, setInputValues] = useState({
    userName: "",
    password: "",
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
            <FontAwesomeIcon icon={faLock} size="3x" color="#3F51B5" />
          </Grid>
          <Grid item>
            <Typography variant="h3">Sign In</Typography>
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
          <Grid item classes={{ root: classes.widthStyle }}>
            <FormControlLabel
              control={
                <Checkbox color="primary" onClick={() => setCheck(!check)} />
              }
              label="Remember Me"
            />
          </Grid>
          <Grid item classes={{ root: classes.widthStyle }}>
            <Button
              classes={{ root: classes.btnStyle }}
              onClick={signInHandler}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item classes={{ root: classes.widthStyle }}>
            <Typography variant="h6">
              Don't have an account?{" "}
              <span
                className={classes.signupTextStyle}
                onClick={() => navigate({ signUpUrl })}
              >
                Sign Up here
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignIn
