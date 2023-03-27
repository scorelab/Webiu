import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Styles from "./styles"

const Complain = () => {
  const [inputDetails, setInputDetails] = useState({
    issue: "",
    message: "",
    name: "",
  })
  const classes = Styles()
  const btnHandler = () => {
    setInputDetails({ issue: "", message: "", name: "" })
  }
  return (
    <Grid container direction="column" classes={{ root: classes.container }}
   
    >
      <Grid item  style={{
      margin:"auto"
    }}>
        <Typography variant="h4">Submit a complaint</Typography>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        classes={{ root: classes.wrapper }}
        style={{
          margin:"auto"
        }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="center"
            classes={{ root: classes.space }}
            style={{
              margin:"auto"
            }}>
            <Grid item  style={{
      margin:"auto"
    }}>
              <Typography variant="h4"  style={{
      margin:"auto"
    }}>What is about?</Typography>
            </Grid>
            <Grid item  style={{
      margin:"auto"
    }}>
              <TextField
                value={inputDetails.issue}
                placeholder="Eg: payment issue"
                classes={{ root: classes.textField }}
                InputProps={{
                  classes: { input: classes.inputStyle },
                }}
                onChange={e => {
                  setInputDetails({
                    ...inputDetails,
                    ["issue"]: e.target.value,
                  })
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h4">Your Message</Typography>
            </Grid>
            <Grid item>
              <TextField
                value={inputDetails.message}
                placeholder="Eg: Type complaint here"
                classes={{ root: classes.textField }}
                InputProps={{
                  classes: { input: classes.inputStyle },
                }}
                onChange={e => {
                  setInputDetails({
                    ...inputDetails,
                    ["message"]: e.target.value,
                  })
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          classes={{ root: classes.bottomWrapper }}
        >
          <Grid item>
            <Typography variant="h4">
              Username related to the complaint(optional)
            </Typography>
          </Grid>
          <Grid item >
            <TextField
              value={inputDetails.name}
              placeholder="Eg: Type name here"
              classes={{ root: classes.textField }}
              InputProps={{
                classes: { input: classes.inputStyle },
              }}
              onChange={e => {
                setInputDetails({
                  ...inputDetails,
                  ["name"]: e.target.value,
                })
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item  style={{
      margin:"auto"
    }}>
        <Button classes={{ root: classes.btnStyle }} onClick={btnHandler}  style={{
      margin:"auto"
    }}>
          <Typography variant="h3">Submit</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default Complain
