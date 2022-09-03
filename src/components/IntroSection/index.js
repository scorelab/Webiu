import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const IntroComponent = ({
  mainText,
  subText,
  image,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="introWrapper">
      <Container>
        <Row>
          <Col md={6} className="intoLeftCol">
            <img className="introMainImage" alt="image" src={image} />
          </Col>
          <Col md={6} className="introRightCol">
            <hr className="introDivider" />
            <p className="subText">{subText}</p>
            <p className="main-heading">{mainText}</p>
            <p className="introDescription">{description}</p>
            <a href={buttonLink}>
              <button className="introBtn">{buttonText}</button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

IntroComponent.propTypes = {
  mainText: PropTypes.string,
  description: PropTypes.string,
  subText: PropTypes.string,
  image: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
