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
          <FontAwesomeIcon icon={iconName} size="4x" style={{marginBottom:"20px"}} />
        </Grid>
        <Grid > {children}</Grid>
      </Grid>
    )
  }
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item>
        <Typography variant="h4"  classes={{root: classes.heading}} >Feel free to Contact Us!</Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <Typography  classes={{root: classes.head}}>
          Please contact us using the information below. For additional
          informations on UOM Higher Education Institute
        </Typography>
      </Grid>
      
      <Grid item container direction="row" classes={{ root: classes.space }}>

        <Grid item  classes={{root: classes.pad }}>
          <DetailCard iconName={faAddressCard}   >
            <Grid container direction="column">
              <Grid item  classes={{root: classes.textGrid}}>
                <Typography>Visit us</Typography>
              </Grid>
              <Grid item classes={{root: classes.textGrid}}>
                <Typography>No: 07/A, <br></br> Galle Rd , Galle</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>

        <Grid item classes={{root: classes.pad }}>
          <DetailCard iconName={faBlenderPhone} >
            <Grid container direction="column">
            <Grid item  classes={{root: classes.textGrid}}>
                <Typography>Text us</Typography>
              </Grid>
              <Grid item classes={{root: classes.textGrid}}>
                <Typography>091-5623123</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>

        <Grid item classes={{root: classes.pad }}>
          <DetailCard iconName={faPhone} size="6x" >
            <Grid container direction="column">
            <Grid item  classes={{root: classes.textGrid}}>
                <Typography>Call us</Typography>
              </Grid>
              <Grid item classes={{root: classes.textGrid}}>
                <Typography>076-3459011</Typography>
              </Grid>
            </Grid>
          </DetailCard>
        </Grid>

        <Grid item classes={{root: classes.pad }}>
          <DetailCard iconName={faEnvelope} >
            <Grid container direction="column">
            <Grid item  classes={{root: classes.textGrid}}>
                <Typography>Mail us</Typography>
              </Grid>
              <Grid item classes={{root: classes.textGrid}}>
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
