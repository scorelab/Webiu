import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col, Form } from "react-bootstrap"

export const RequestCall = ({
  subText,
  mainText,
  image,
  buttonText,
  handleEmailSubmit,
}) => {
  const [email, setEmail] = useState("")
  const handleEmail = e => setEmail(e.target.value)

  return (
    <Container>
      <Row>
        <Col md={6} className="requestLeftCol">
          <img src={image} className="leftColImage" />
        </Col>
        <Col md={6} className="requestRightCol">
          <hr className="callDivider" />
          <p className="subText">{subText}</p>
          <p className="mainHeading">{mainText}</p>

          <Form onSubmit={handleEmailSubmit(email)}>
            <Form.Group controlId="request-form">
              <Form.Control
                type="email"
                placeholder="Enter Your E-mail"
                onChange={handleEmail}
                className="customField"
                required
              />
            </Form.Group>
            <button type="submit" className="send-button">
              {buttonText}
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

RequestCall.defaultProps = {
  handleEmailSubmit: function() {},
}

RequestCall.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  image: PropTypes.string,
  buttonText: PropTypes.string,
}
