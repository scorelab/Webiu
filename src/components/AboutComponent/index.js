import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { Link, withPrefix } from "gatsby"

export const AboutComponent = ({header, mainText, subText, buttonText, buttonLink, image, backgroundColor}) => {
  return (
    <div>
    <div className="about-header">{<h1>{header}</h1>}</div>
    <div style={{ backgroundImage: `url(${withPrefix('/images/dots.png')})` }} className="about-component" >
      <Container>
          <Row>
            <Col md={6} className="left-col">
              <div className="about-content-section">
                {mainText ? <h1>
                  <span className='colored-text'>{mainText.split(' ')[0]}</span>
                  <span>{mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null)}</span>
                </h1> : null}
                <p>{subText}</p>
                {buttonText ? <Link to={buttonLink} className="button">{buttonText}</Link> : null}
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


AboutComponent.propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string
}
