import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faBlenderPhone,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const ContactUs = () => {
  const classes = Styles()

  const DetailCard = ({ children, iconName }) => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.wrapper }}
      >
        <Grid item>
          <FontAwesomeIcon icon={iconName} size="2x" />
        </Grid>
        <Grid item> {children}</Grid>
      </Grid>
    )
  }
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item>
        <Typography variant="h4">Feel free to Contact Us!</Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Typography>
          Please contact us using the information below. For additional
          informations on UOM Higher Education Institute
        </Typography>
      </Grid>
      <Grid item container direction="column" classes={{ root: classes.space }}>
        <Grid item>
          <DetailCard iconName={faAddressCard}>
            <Grid container direction="column">
              <Grid item>
                <Typography>No: 07/A,</Typography>
              </Grid>
              <Grid item>
                <Typography> Galle Rd</Typography>
              </Grid>
              <Grid item>
                <Typography>Galle</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>
        <Grid item classes={{ root: classes.spaceWrapper }}>
          <DetailCard iconName={faBlenderPhone}>
            <Grid container direction="column">
              <Grid item>
                <Typography>091-5623123</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>
        <Grid item>
          <DetailCard iconName={faPhone}>
            <Grid container direction="column">
              <Grid item>
                <Typography>076-3459011</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>
        <Grid item>
          <DetailCard iconName={faEnvelope}>
            <Grid container direction="column">
              <Grid item>
                <Typography>info@uom.io</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactUs
