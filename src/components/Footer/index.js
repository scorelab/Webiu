import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faLinkedin, faGithub, faGitter, faMedium } from "@fortawesome/free-brands-svg-icons";

export const Footer = ({mainText, socialLinks = {} }) => {
  const { 
    facebook,
    gitter,
    twitter,
    github,
    linkedin,
    medium
  } = socialLinks

  return (
    <div className="footer-component">
      <Container>
          <Row>
            <Col>
              <div className="social-icons-container">
                {!facebook || <a href={facebook}><FontAwesomeIcon icon={faFacebook} className="icon" /></a>}
                {!gitter || <a href={gitter}><FontAwesomeIcon icon={faGitter} className="icon" /></a>}
                {!medium || <a href={medium}><FontAwesomeIcon icon={faMedium} className="icon" /></a>}
                {!twitter || <a href={twitter}><FontAwesomeIcon icon={faTwitter} className="icon" /></a>}
                {!github || <a href={github}><FontAwesomeIcon icon={faGithub} className="icon" /></a>}
                {!linkedin || <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>}
              </div>
              <p className="main-text">{mainText} {(new Date().getFullYear())}</p>
            </Col>
          </Row>
      </Container>
    </div>
  )
}


Footer.propTypes = {
  mainText: PropTypes.string,
  socialLinks: PropTypes.object,
}