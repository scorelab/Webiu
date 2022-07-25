import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"
import Styles from "./styles"

const Footer = ({
  contactNumber,
  email,
  privacyPolicyLink,
  facebookLink,
  twitterLink,
  instragramLink,
}) => {
  const classes = Styles()
  return (
    <footer className={classes.footerStyle}>
      <Grid
        container
        justifyContent="space-between"
        classes={{ root: classes.container }}
      >
        <Grid item classes={{ root: classes.linkContainer }}>
          <Grid container>
            <Grid
              item
              container
              direction="column"
              classes={{ root: classes.linkStyle }}
            >
              <Grid item>
                <Typography variant="h2">Contact us</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">{contactNumber}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              classes={{ root: classes.linkStyle }}
            >
              <Grid item>
                <Typography variant="h2">Customer Service</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">{email}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              classes={{ root: classes.linkStyle }}
            >
              <Grid item>
                <Typography variant="h2">Information</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  component={Link}
                  to={privacyPolicyLink}
                >
                  Privacy Policy Terms & Conditions
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" justifyContent="space-around">
            <Grid item>
              <IconButton
                component={Link}
                to={facebookLink}
                classes={{ root: classes.iconStyle }}
              >
                <FontAwesomeIcon icon={faFacebook} size="1x" inverse />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component={Link}
                to={twitterLink}
                classes={{ root: classes.iconStyle }}
              >
                <FontAwesomeIcon icon={faTwitter} size="1x" inverse />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component={Link}
                to={instragramLink}
                classes={{ root: classes.iconStyle }}
              >
                <FontAwesomeIcon icon={faInstagram} size="1x" inverse />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
  contactNumber: PropTypes.string,
  email: PropTypes.string,
  privacyPolicyLink: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  instragramLink: PropTypes.string,
}

export default Footer
