import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import {withPrefix} from "gatsby"

export const GuideLines = ({ heading, description, guidelines, image}) => {
  return (
    <div className="guide-lines-component">
      <Container>
        <Row>
          <Col>
            <h1>{heading}</h1>
            <h2>{description}</h2>
            <ol>
              {!guidelines || guidelines.map((guideline, i) => (
                <li key={i}>{guideline}</li>
              ))}
            </ol>
          </Col>
          {image ? <Col>
            <img alt="logo" src={withPrefix(image)} style={{maxWidth: "400px"}} />
          </Col> : null}
        </Row>
      </Container>
    </div>
  )
}

GuideLines.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  guidelines: PropTypes.array, 
  image: PropTypes.string
}
