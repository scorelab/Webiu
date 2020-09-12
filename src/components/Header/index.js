import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = ({mainText, subText, icon, buttonText, buttonLink, image, small=false, backgroundColor}) => {
  return (
    <div style={{ backgroundColor, backgroundImage: 'url(./images/dots.png)' }} className="header-component" >
      <Container>
        {small ? (
          <Row>
            <Col className="small-header-col">    
              <h1>
                {!icon || <FontAwesomeIcon icon={icon} className="icon"/>}{" "}
                {mainText}
              </h1>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md={6} className="left-col">
              <div className="header-content-section">     
                <h1>
                  <span className='colored'>{mainText.split(' ')[0]}</span>
                  <span>{mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null)}</span>
                </h1>
                <p>{subText}</p>
                <Link to={buttonLink} className="btn">{buttonText}</Link>
              </div>
            </Col>
            <Col md={6} className="right-col">
              <img className= "main-image" alt="Header" src={image} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}


Header.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
}
