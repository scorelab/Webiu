import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const HeroSectionThemeFive = ({
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
    <div className="heroThreeWrap"  style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Row>
          <Col md={6} className="rightCol"></Col>
          <Col md={6} className="heroThreeleftCol">
            <div>
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

HeroSectionThemeFive.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  SubData: PropTypes.array,
}
