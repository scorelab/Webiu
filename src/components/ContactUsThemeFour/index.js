import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col, Form } from "react-bootstrap"

export const ContactUsThemeFour = ({
  contactListData,
  subTextLeftCol,
  mainTextLeftCol,
  subHeadingLeftCol,
  subTextRightCol,
  mainTextRightCol,
  handleContactSubmit,
}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleName = e => setName(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handlePhone = e => setPhone(e.target.value)
  const handleSubject = e => setSubject(e.target.value)
  const handleMessage = e => setMessage(e.target.value)

  return (
    <div className="contactUsFourWrap">
      <Container>
        <Row>
          <Col md={4} className="contactUsFourLeftCol">
            <hr className="contactDivider" />
            <p className="contactSubText">{subTextLeftCol}</p>
            <h1 className="contactMainHeading">{mainTextLeftCol}</h1>
            <p className="subHeading">{subHeadingLeftCol}</p>
            {contactListData &&
              contactListData.map((contactListData, index) => {
                return (
                  <div key={index}>
                    <p className="contactListData">{contactListData.detail}</p>
                  </div>
                )
              })}
          </Col>
          <Col md={8} className="contactUsFourRightCol">
            <Container>
              <hr className="contactDivider" />
              <p className="contactSubText">{subTextRightCol}</p>
              <h1 className="contactMainHeading">{mainTextRightCol}</h1>
              <Form
                onSubmit={handleContactSubmit(name, email, subject, message)}
              >
                <Form.Group controlId="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        onChange={handleName}
                        className="custom-field"
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="email"
                        placeholder="Your E-mail"
                        onChange={handleEmail}
                        className="custom-field"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Your Phone"
                        onChange={handlePhone}
                        className="custom-field"
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Subject"
                        onChange={handleSubject}
                        className="custom-field"
                        required
                      />
                    </Col>
                  </Row>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Your Message"
                    className="custom-field"
                    onChange={handleMessage}
                    required
                  />
                </Form.Group>
                <button type="submit" className="send-button">
                  Submit
                </button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ContactUsThemeFour.defaultProps = {
  handleContactSubmit: function() {},
}

ContactUsThemeFour.propTypes = {
  contactListData: PropTypes.object,
  subTextLeftCol: PropTypes.string,
  mainTextLeftCol: PropTypes.string,
  subHeadingLeftCol: PropTypes.string,
  subTextRightCol: PropTypes.string,
  mainTextRightCol: PropTypes.string,
  handleContactSubmit: PropTypes.func,
}
