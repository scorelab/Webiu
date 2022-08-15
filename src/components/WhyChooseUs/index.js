import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const WhyChooseUs = ({ mainText, subText, image, description }) => {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col md={6} className="left-col">
            <div>
              <h1 className="wcu-MainText">{mainText}</h1>
              <p className="wcu-SubText">{subText}</p>
              <p className="wcu-description">{description}</p>
            </div>
          </Col>
          <Col md={6} className="right-col">
            <img className="mainImage" alt="Header" src={image} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

WhyChooseUs.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
