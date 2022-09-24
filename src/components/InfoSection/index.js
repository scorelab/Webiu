import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const InfoSection = ({ subText, mainText, infoListData }) => {
  return (
    <div className="infoSectionWrapper">
      <Container>
        <hr className="infoDivider" />
        <p className="infoSubText">{subText}</p>
        <p className="infoMainHeading">{mainText}</p>
        <Row className="infoRowWrapper">
          {infoListData &&
            infoListData.map((infoListData, index) => {
              return (
                <Col key={index} md={4} className="infoColDiv">
                  <img src={infoListData.image} className="infoImage" />
                  <p className="infoSectionHeading">{infoListData.text}</p>
                  <p className="infoDescription">{infoListData.description}</p>
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

InfoSection.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  infoListData: PropTypes.object,
}
