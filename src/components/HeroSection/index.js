import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"
import ArrowCircleRight from "../../../static/icons/Arrow_Circle_Right.svg"

export const HeroSection = ({
  mainText,
  subText,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div className="main-wrapper">
      <Container>
        <Row>
          <Col md={6} className="left-col">
            <img className="main-image" alt="image" src={image} />
          </Col>
          <Col md={6} className="right-col">
            <div className="main-heading">{mainText}</div>
            <p className="subText">{subText}</p>
            <span className="btn">
              <a href={buttonLink}>{buttonText}</a>
              <img src={ArrowCircleRight} className="icon" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

HeroSection.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
}
