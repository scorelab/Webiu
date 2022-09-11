import React from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const ChangeProfile = ({ firstName, lastName, contactNumber }) => {
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
        <Typography>Change Profile Details</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowStyle }}
      >
        <Grid item style={{ margin: "10px" }}>
          <h7>First name:</h7>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="fistName"
            defaultValue={firstName}
            type="text"
            id="fistName"
            size="small"
            style={{ marginTop: "2px" }}
            // value={firstName}
            // onChange={e => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item style={{ margin: "10px" }}>
          <h7>Last name:</h7>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="secondName"
            defaultValue={lastName}
            type="text"
            id="name"
            size="small"
            style={{ marginTop: "2px" }}
            // value={lastName}
            // onChange={e => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item style={{ margin: "10px" }}>
          <h7>Contact number:</h7>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="mobileNumber"
            defaultValue={contactNumber}
            type="number"
            id="mobileNumber"
            size="small"
            style={{ marginTop: "2px" }}
            // value={contactNumber}
            // onChange={e => setContactNumber(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button classes={{ root: classes.btnStyle }}>Save Changes</Button>
        </Grid>
        <Grid item>
          <Button classes={{ root: classes.cancelBtnStyle }}>Cancel</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChangeProfile
