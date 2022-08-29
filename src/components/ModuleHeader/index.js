import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { faUsers, faUsersRo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"

const ModuleHeader = ({ subject, year, name, participatsCount }) => {
  const classes = Styles()
  return (
    <Grid
      container
      direction="row"
      classes={{ root: classes.container }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Grid item container direction="row" alignItems="center">
          <Grid item>
            <FontAwesomeIcon
              icon={faUsers}
              size="5x"
              className={classes.iconStyle}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              classes={{ root: classes.columnWrapper }}
            >
              <Grid item>
                <Typography classes={{ root: classes.text }}>
                  {subject} - {year}
                </Typography>
              </Grid>
              <Grid item>
                <Typography classes={{ root: classes.text }}>{name}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Typography classes={{ root: classes.text }}>
          {participatsCount} Members
        </Typography>
      </Grid>
    </Grid>
  )
}

ModuleHeader.propTypes = {
  subject: PropTypes.string,
  year: PropTypes.string,
  name: PropTypes.string,
  participatsCount: PropTypes.string,
}

export default ModuleHeader
