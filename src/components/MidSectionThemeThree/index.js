import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import "./style.sass"

export const MidSectionThemeThree = ({
  mainText,
  subText,
  cardItems,
  linkUrl,
  linkText,
}) => {
  return (
    <div className="midSectionWrapper">
      <Container>
        <Row className="midSectionRow">
          <Col className="midSectionLeftCol">
            <div className="midSectionCard topLeftCard">
              <img
                className="midSectionImage"
                alt={cardItems[0].label}
                src={cardItems[0].image}
              />
              <p className="cardLabel">{cardItems[0].label}</p>
            </div>
            <div className="midSectionCard topRightCard">
              <img
                className="midSectionImage"
                alt={cardItems[1].label}
                src={cardItems[1].image}
              />
              <p className="cardLabel">{cardItems[1].label}</p>
            </div>
            <div className="midSectionCard bottomLeftCard">
              <img
                className="midSectionImage"
                alt={cardItems[2].label}
                src={cardItems[2].image}
              />
              <p className="cardLabel">{cardItems[2].label}</p>
            </div>
            <div className="midSectionCard bottomRightCard">
              <img
                className="midSectionImage"
                alt={cardItems[3].label}
                src={cardItems[3].image}
              />
              <p className="cardLabel">{cardItems[3].label}</p>
            </div>
          </Col>
          <Col className="midSectionRightCol">
            <h2 className="main-heading">{mainText}</h2>
            <p className="subText">{subText}</p>
            <a className="midSectionLink" href={linkUrl}>
              {linkText} →
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

MidSectionThemeThree.propTypes = {
  mainText: PropTypes.string,
  description: PropTypes.string,
  subText: PropTypes.string,
  imageOne: PropTypes.string,
  imageTwo: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
