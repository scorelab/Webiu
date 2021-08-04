import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { Link, withPrefix } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = ({mainText, subText, icon, buttonText, buttonLink, image, small, backgroundColor}) => {
  return (
    <div className="header-component" >
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
                { mainText ? <h1>
                  <span className='colored'>{mainText.split(' ')[0]}</span>
                  <span>{mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null)}</span>
                </h1> : null }
                <p className="header-para">{subText}</p>
                <Link to={buttonLink} className="btn">{buttonText}</Link>
              </div>
            </Col>
            { image ? <Col md={6} className="right-col">
              <img className= "main-image" alt="Header" src={withPrefix(image)} />
            </Col> : null }
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
  small: PropTypes.bool,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string
}
