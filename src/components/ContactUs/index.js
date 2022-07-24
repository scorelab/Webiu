import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Col, Container, Form, Row } from "react-bootstrap"

export const ContactUs = ({ contactTitle, handleContactSubmit }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleName = e => setName(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handleSubject = e => setSubject(e.target.value)
  const handleMessage = e => setMessage(e.target.value)

  return (
    <div className="contactUs-component">
      <Container>
        <h1 className="title">{contactTitle}</h1>
        <Form onSubmit={handleContactSubmit(name, email, subject, message)}>
          <Form.Group controlId="contact-form">
            <Row>
              <Col md={6}>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name "
                  onChange={handleName}
                  className="custom-field"
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  onChange={handleEmail}
                  className="custom-field"
                  required
                />
              </Col>
            </Row>
            <Form.Control
              type="text"
              placeholder="Enter Subject"
              onChange={handleSubject}
              className="custom-field"
              required
            />

            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Enter Your Message"
              className="custom-text-area"
              onChange={handleMessage}
              required
            />
          </Form.Group>
          <button type="submit" className="send-button">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  )
}

ContactUs.defaultProps = {
  contactTitle: "",
  handleContactSubmit: function() {},
}

ContactUs.propTypes = {
  contactTitle: PropTypes.string,
  handleContactSubmit: PropTypes.func,
}
