import React, { useState } from "react"
import PropTypes from "prop-types"
import {withPrefix} from 'gatsby'
import "./style.sass"
import {Container, Row, Col, Form} from 'react-bootstrap'

export const Contact = ({contactMessage, subscribeMessage, contactTitle, subscribeTitle, handleContactSubmit, handleSubscribeSubmit}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  return (
    <div className="contact-component" style={{ backgroundImage: 'url(./images/dots.png)' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="title">{contactTitle}</h1>
            <p className="main-text">{contactMessage}</p>
            <Form onSubmit={handleContactSubmit(name, email, message)}>
              <Form.Group controlId="contact-form">
                <Form.Control type="text" placeholder="Name" onChange={handleName} required />
                <Form.Control type="email" placeholder="E-Mail" onChange={handleEmail} required />
                <Form.Control as="textarea" rows="3" placeholder="Your Message" className="custom-text-area" onChange={handleMessage} required />
              </Form.Group>
              <button type="submit" className="send-button">
                SEND
              </button>
            </Form>
          </Col>
          <Col md={6}>
            <h1 className="title">{subscribeTitle}</h1>
            <p className="main-text">{subscribeMessage}</p>
            <img className="subscribe-image" alt="subscribe" src={withPrefix('./icons/email-icon.png')} />
            <Form onSubmit={handleSubscribeSubmit(email)}>
            <Form.Group controlId="subscribe-form">
              <Form.Control type="email" placeholder="E-Mail" onChange={handleEmail} required />
            </Form.Group>
            <button type="submit" className="send-button subscribe">
              SUBSCRIBE
            </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Contact.propTypes = {
  contactMessage: PropTypes.string,
  subscribeMessage: PropTypes.string,
  contactTitle: PropTypes.string,
  subscribeTitle: PropTypes.string,
  handleSubscribeSubmit: PropTypes.func,
  handleContactSubmit: PropTypes.func
}