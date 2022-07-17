import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const InfoComponent = ({ mainText, subText, image, SubData }) => {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col md={6} className="left-col">
            <img className="main-image" alt="image" src={image} />
          </Col>
          <Col md={6} className="right-col">
            <div className="main-heading">{mainText}</div>
            <p className="subText">{subText}</p>
            {SubData &&
              SubData.map((SubData, index) => {
                return (
                  <div key={index}>
                    <div class="image-left">
                      <img src={SubData.subImage} />
                      <div>
                        <p className="SubSectionHeading">
                          {SubData.subDataHeading}
                        </p>
                        <p className="SubSectionText">{SubData.subDataPara}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

InfoComponent.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  image: PropTypes.string,
  SubData: PropTypes.array,
}
