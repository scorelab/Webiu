import React from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const Profile = ({ profileData }) => {
  const classes = Styles()
  const data = profileData.map((ele, i) => (
    <Grid item container key={i}>
      <Grid
        item
        container
        classes={{ root: classes.container }}
        justifyContent="space-between"
      >
        <Grid item>
          <Typography>{ele.key}</Typography>
        </Grid>
        <Grid item>
          <Typography>:</Typography>
        </Grid>
      </Grid>
      <Grid item classes={{ root: classes.valueStyle }}>
        <Typography>{ele.value}</Typography>
      </Grid>
    </Grid>
  ))
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
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowStyle }}
      >
        {data}
      </Grid>
      <Grid item classes={{ root: classes.rowStyle }}>
        <Button
          classes={{ root: classes.btnStyle }}
          onClick={() => {
            navigate("changeProfile")
          }}
        >
          Change Profile Details
        </Button>
      </Grid>
      <Grid item classes={{ root: classes.rowStyle }}>
        <Button
          classes={{ root: classes.pwdBtnStyle }}
          onClick={() => {
            navigate("changePassword")
          }}
        >
          Change Password
        </Button>
      </Grid>
    </Grid>
  )
}

export default Profile
