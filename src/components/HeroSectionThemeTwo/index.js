import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Row, Col, Button } from "react-bootstrap"

export const HeroSectionThemeTwo = ({
  mainText,
  subText,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <>
      <div className="hero-main-wrapper">
        <Row>
          <Col md={6} className="left-hero-div">
            <div className="hero-heading">{mainText}</div>
            <p className="subText">{subText}</p>
            {buttonText ? (
              <a href={buttonLink}>
                <Button className="hero-btn">{buttonText}</Button>
              </a>
            ) : null}
          </Col>
          <Col
            md={6}
            className="right-hero-div"
            style={{ backgroundImage: `url(${image})` }}
          ></Col>
        </Row>
      </div>
    </>
  )
}

HeroSectionThemeTwo.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
}
