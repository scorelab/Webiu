import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Row, Col, Container } from "react-bootstrap"

export const Mission = ({ mainText, subText, image, declaration }) => {
  return (
    <>
      <div className="Mission-main-wrapper">
        <Container>
          <Row>
            <Col md={6} className="left-Mission-div">
              <img src={image} className="Mission-image" />
            </Col>
            <Col md={6} className="right-Mission-div">
              <h1 className="Mission-heading">{mainText}</h1>
              <p className="subText">{subText}</p>
              <p className="declaration">{declaration }</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

Mission.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  declaration: PropTypes.string,
  image: PropTypes.string,
}
