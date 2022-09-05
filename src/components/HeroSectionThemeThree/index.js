import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const HeroSectionThemeThree = ({
  mainText,
  subText,
  image,
  description,
  buttonText,
  buttonLink,
  contributeLink,
  contributeText,
}) => {
  return (
    <div className="heroThreeWrap">
      <Container>
        <Row>
          <Col md={6} className="heroThreeleftCol">
            <div>
              {subText ? <p className="herothreeSubText">{subText}</p> : null}
              {mainText ? <h1 className="MainText">{mainText}</h1> : null}
              {description ? (
                <p className="heroThreeDescription">{description}</p>
              ) : null}
              <div className="heroBtnWrap">
                {contributeText ? (
                  <a href={contributeLink}>
                    <button className="heroBtnOne"> {contributeText}</button>
                  </a>
                ) : null}
                {buttonText ? (
                  <a href={buttonLink}>
                    <button className="heroBtnTwo">{buttonText}</button>
                  </a>
                ) : null}
              </div>
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

HeroSectionThemeThree.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  contributeLink: PropTypes.string,
  contributeText: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
