import React from "react"
import PropTypes from "prop-types"
import {withPrefix} from 'gatsby'
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'

export const DescriptionContainer = ({title, subTitle, image, mainText, sideComponent}) => {
  return (
    <div className="description-container-component">
      <Container>
        {!title || (
          <Row>
            <Col>
              <h1 className="title">{title}</h1>
              {!subTitle || <h5>{subTitle}</h5>}
            </Col>
          </Row>
        )}
        {!image || (
          <Row>
            <Col className="description-container-image-container">
              <img className="description-container-image" alt="Header" src={withPrefix(image)} />
            </Col>
          </Row>
        )}
        <Row>
          <Col lg={sideComponent ? 7 :  12}>
            <p className="description-container-text">{mainText}</p>
          </Col>
          {!sideComponent || (
            <Col lg={5}>
              {sideComponent}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

DescriptionContainer.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  mainText: PropTypes.string,
  sideComponent: PropTypes.object
}
