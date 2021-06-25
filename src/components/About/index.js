import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { Link, withPrefix } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const About = ({header, mainText, subText, buttonText, buttonLink, image, backgroundColor}) => {
  return (
    <div className="about-component">
    {header ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faInfoCircle} /> {header}</h2>
    </div> : null}
    <div className="about-us" style={{backgroundColor: backgroundColor}}>
      <Container>
          <Row>
            <Col md={6} className="left-col">
              <div className="about-content-section">
                {mainText ? <h1>
                  <span className='colored-text'>{mainText.split(' ')[0]}</span>
                  <span>{mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null)}</span>
                </h1> : null}
                <p>{subText}</p>
                {buttonText ? <Link to={buttonLink} className="btn">
                    {buttonText}
                </Link> : null}
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

About.propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string
}