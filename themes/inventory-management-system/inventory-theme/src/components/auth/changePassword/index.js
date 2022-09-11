import React from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const ChangePassword = ({ currentPassword }) => {
  const classes = Styles()
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h2">My Profile</Typography>
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faUserCircle}
          size="6x"
          className={classes.iconStyle}
        />
      </Grid>
      <Grid item>
        <Typography>Change Password</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowStyle }}
      >
        <Grid item style={{ margin: "10px" }}>
          <h7>Current password:</h7>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="currentPassword"
            defaultValue={currentPassword}
            type="password"
            id="currentPassword"
            size="small"
            style={{ marginTop: "2px" }}
            // value={currentPassword}
            // onChange={e => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item style={{ margin: "10px" }}>
          <h7>New Password:</h7>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newPassword"
            type="password"
            id="newPassword"
            size="small"
            style={{ marginTop: "2px" }}
            // value={newPassword}
            // onChange={e => setNewPassword(e.target.value)}
          />
        </Grid>
        <Grid item style={{ margin: "10px" }}>
          <h7>Confirm Password:</h7>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            size="small"
            style={{ marginTop: "2px" }}
            // value={confirmPassword}
            // onChange={e => setConfirmedPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button classes={{ root: classes.btnStyle }}>Change Password</Button>
        </Grid>
        <Grid item>
          <Button classes={{ root: classes.cancelBtnStyle }}>Cancel</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChangePassword
