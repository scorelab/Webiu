import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const ProfileSection = ({ description, userDetails }) => {
  const classes = Styles()
  const keys = Object.keys(userDetails)
  const values = Object.values(userDetails)
  const details = keys.map((ele, i) => {
    return (
      <Grid item key={i}>
        <Grid container>
          <Grid item>
            <Typography>{ele}</Typography>
          </Grid>
          <Grid item>
            <Typography classes={{ root: classes.textStyle }}>
              {values[i]}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  })
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.container }}
      alignItems="center"
    >
      <Grid item classes={{ root: classes.iconStyle }}>
        <Icon>
          <FontAwesomeIcon icon={faUser} size="3x" />
        </Icon>
      </Grid>
      <Grid item>
        <Typography variant="body2" classes={{ root: classes.paraStyle }}>
          "{description}"
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          {details}
        </Grid>
      </Grid>
    </Grid>
  )
}

ProfileSection.propTypes = {
  description: PropTypes.string,
  userDetails: PropTypes.object,
}

export default ProfileSection
