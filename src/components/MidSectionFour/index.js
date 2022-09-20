import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const MidSectionFour = ({
  mainText,
  subText,
  imageOne,
  imageTwo,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="midSectionWrapper">
      <Container>
        <Row>
          <Col md={6} className="midSectionLeftCol">
            <hr className="midSectionDivider" />
            <p className="subText">{subText}</p>
            <p className="main-heading">{mainText}</p>
            <p className="midSectionDescription">{description}</p>
            <a href={buttonLink}>
              <button className="midSectionBtn">{buttonText}</button>
            </a>
          </Col>
          <Col className="midSectionRightCol">
            <Row>
              <Col>
                <img
                  className="midSectionMainImage"
                  alt="image"
                  src={imageOne}
                />
              </Col>
              <Col>
                <img
                  className="midSectionMainImage"
                  alt="image"
                  src={imageTwo}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

MidSectionFour.propTypes = {
  mainText: PropTypes.string,
  description: PropTypes.string,
  subText: PropTypes.string,
  imageOne: PropTypes.string,
  imageTwo: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
