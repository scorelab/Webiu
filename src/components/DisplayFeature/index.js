import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const DisplayFeature = ({
  mainText,
  subText,
  image,
  description,
  SubData,
}) => {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col md={6} className="leftCol">
            <div>
              <h1 className="MainText">{mainText}</h1>
              <p className="SubText">{subText}</p>
              <p className="description">{description}</p>
              {SubData &&
                SubData.map((SubData, index) => {
                  return (
                    <div key={index} className="SubSection">
                      <div>
                        <img className="image-left" src={SubData.subImage} />
                        <p className="SubSectionHeading">
                          {SubData.subDataHeading}
                        </p>
                        <p className="SubSectionText">{SubData.subDataPara}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </Col>
          <Col md={6} className="rightCol">
            <img className="mainImage" alt="Header" src={image} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

DisplayFeature.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  SubData: PropTypes.array,
}
