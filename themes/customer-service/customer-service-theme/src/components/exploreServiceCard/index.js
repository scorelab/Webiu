import React from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const ExploreServiceCard = ({ name, userName, description, location }) => {
  const classes = Styles()
  const hireBtnHandler = () => {
    navigate("/findService/createRequest")
  }
  return (
    <Grid
      container
      direction="row"
      classes={{ root: classes.container }}
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid item>
        <FontAwesomeIcon icon={faUser} size="6x" />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">{name}</Typography>
            <Typography variant="body1">UserName: {userName}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item container alignItems="center">
          <Grid item>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2x"
              className={classes.location}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">{location}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Button classes={{ root: classes.viewProfileBtn }}>
            <Typography variant="h4">View Profile</Typography>
          </Button>
          <Button classes={{ root: classes.hireBtn }} onClick={hireBtnHandler}>
            <Typography variant="h4">Hire Now!</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ExploreServiceCard
