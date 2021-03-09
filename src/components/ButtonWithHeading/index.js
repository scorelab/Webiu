import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'

export const ButtonWithHeading = ({ heading, buttonText, onClick = () => {}}) => {
  return (
    <div className="button-with-heading-component">
      <Container>
        <Row>
          <Col>
            {heading ? <h1>{heading}</h1> : null}
            {buttonText ? <button className="button-main" onClick={onClick}>
              {buttonText}
            </button> : null}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ButtonWithHeading.propTypes = {
  heading: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
}
