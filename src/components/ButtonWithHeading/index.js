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
            <h1>{heading}</h1>
            <button className="button-main" onClick={onClick}>
              {buttonText}
            </button>
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