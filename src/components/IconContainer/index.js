import React from "react"
import Grid from "@material-ui/core/Grid"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"

const IconCard = ({
  iconName,
  subject,
  name,
  year,
  participantsCount,
  memberText,
  moduleCount,
  moduleText,
  onClickHandler,
}) => {
  const classes = Styles()
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.card }}
      alignItems="center"
      onClick={onClickHandler}
    >
      <Grid item classes={{ root: classes.image }}>
        <FontAwesomeIcon icon={iconName} size="8x" />
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Grid container>
          <Grid item>
            <Typography variant="h5">{subject}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{year}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item classes={{ root: classes.bottomContainer }}>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography classes={{ root: classes.text }}>
                  {participantsCount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography classes={{ root: classes.text }}>
                  {memberText}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography classes={{ root: classes.text }}>
                  {moduleCount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography classes={{ root: classes.text }}>
                  {moduleText}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

IconCard.propTypes = {
  subject: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  participantsCount: PropTypes.string,
  memberText: PropTypes.string,
  moduleCount: PropTypes.string,
  moduleText: PropTypes.string,
  onClickHandler: PropTypes.func,
}

export default IconCard
