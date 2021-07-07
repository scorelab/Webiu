import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'

export const ButtonWithHeading = ({ heading, color, buttonText, buttonWidth, onClick = () => {}}) => {
  return (
    <div className="button-with-heading-component">
      <Container>
        <Row>
          <Col> 
            <h1>{heading}</h1>
            {buttonText ? 
                <button className="button-main"
                        style={{width: buttonWidth, backgroundColor: color}}
                        onClick={onClick}>
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