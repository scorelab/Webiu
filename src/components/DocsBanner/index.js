import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const DocsBanner = ({ mainText, subText, buttonText, buttonLink }) => {
  return (
    <div className="docsBannerWrap">
      <Container className="docsContainer">
        <div className="docsBannerdiv">
          <Row>
            <Col md={4} className="docsBannerLeftCol">
              <p>{mainText}</p>
            </Col>
            <Col md={8} className="docsBannerRightCol">
              <div>
                <p className="header-para">{subText}</p>
                {buttonText ? (
                  <a href={buttonLink}>
                    <button className="docsBtn">{buttonText}</button>
                  </a>
                ) : null}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

DocsBanner.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}
