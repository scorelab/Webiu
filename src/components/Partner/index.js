import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { Link, withPrefix } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

export const Partner = ({header, mainText, subText, buttonText, buttonLink, image, backgroundColor, contactLink, contactText}) => {
  return (
    <div className="partner-component">
    {header ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faHandshake} /> {header}</h2>
    </div> : null}
    <div className="partner-with-us" style={{backgroundColor: backgroundColor}}>
      <Container>
          <Row>
            <Col md={6} className="left-col">
              <div className="partner-content-section">
                {mainText ? <h1>
                  <span className='colored-text'>{mainText.split(' ')[0]}</span>
                  <span>{mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null)}</span>
                </h1> : null}
                <p>{subText}</p>
                <div className="buttons-div">
                  {contactText ? <Link to={contactLink} className="btn-contact">
                      {contactText}
                  </Link> : null}
                  {buttonText ? <Link to={buttonLink} className="btn-link">
                      {buttonText}
                  </Link> : null}
                </div>
              </div>
            </Col>
            <Col md={6} className="right-col">
              <img className= "about-image" alt="About" src={withPrefix(image)} />
            </Col>
          </Row>
      </Container>
    </div>
    </div>
  )
}

Partner.propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  contactText: PropTypes.string,
  contactLink: PropTypes.string
}