import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const FAQSection = ({ show, setShowHandler, title, description }) => {
  const classes = Styles()
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={setShowHandler}>
            {show ? (
              <FontAwesomeIcon icon={faAngleUp} size="1x" inverse />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} size="1x" inverse />
            )}
          </IconButton>
        </Grid>
      </Grid>
      {show && (
        <Grid item>
          <Typography variant="body2">{description}</Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default FAQSection
