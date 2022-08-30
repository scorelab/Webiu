import React, { useState } from "react"
import ParticlesBg from "particles-bg"
import { Zoom } from "react-awesome-reveal"
import { Typewriter } from "react-simple-typewriter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlask } from "@fortawesome/free-solid-svg-icons"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Styles from "./styles"

const Login = ({ name, typeWriteWords, typeWriterHeader, submitHandler }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const classes = Styles()
  return (
    <div>
      <ParticlesBg
        color="#009688"
        type="cobweb"
        num={window.innerWidth / 40}
        bg
      />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        classes={{ root: classes.container }}
      >
        <Zoom triggerOnce>
          <Grid
            container
            direction="column"
            alignItems="center"
            classes={{ root: classes.wrapper }}
          >
            <Grid item>
              <Typography variant="h3">Welcome to {name}</Typography>
            </Grid>
            <Grid item classes={{ root: classes.logoStyle }}>
              <FontAwesomeIcon icon={faFlask} size="5x" color="#E34964" />
            </Grid>
            <Grid item classes={{ root: classes.widthStyle }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
                InputProps={{ style: { fontSize: 18 } }}
                InputLabelProps={{ className: classes.labelStyle }}
                style={{ backgroundColor: "#CEDBE8" }}
              />
            </Grid>
            <Grid item classes={{ root: classes.widthStyle }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                autoComplete="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
                InputProps={{ style: { fontSize: 18 } }}
                InputLabelProps={{ className: classes.labelStyle }}
                style={{ backgroundColor: "#CEDBE8" }}
              />
            </Grid>
            <Grid item classes={{ root: classes.widthStyle }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                classes={{ root: classes.btnStyle }}
                onClick={submitHandler}
              >
                Log In
              </Button>
            </Grid>
            <Grid item>
              <Typography>
                {typeWriterHeader}{" "}
                <span className={classes.typeWriterWrapper}>
                  <Typewriter words={typeWriteWords} loop={0} cursor />
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Zoom>
      </Grid>
    </div>
  )
}

export default Login
