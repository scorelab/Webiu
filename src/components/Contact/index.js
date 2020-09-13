import React from "react"
import PropTypes from "prop-types"
import {withPrefix} from 'gatsby'
import "./style.sass"
import {Container, Row, Col, Form} from 'react-bootstrap'

export const Contact = ({contactMessage, subscribeMessage}) => {
  return (
    <div className="contact-component" style={{ backgroundImage: 'url(./images/dots.png)' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="title">Contact Us</h1>
            <p className="main-text">{contactMessage}</p>
            <Form>
              <Form.Group controlId="contact-form">
                <Form.Control type="text" placeholder="Name" />
                <Form.Control type="email" placeholder="E-Mail" />
                <Form.Control as="textarea" rows="3" placeholder="Your Message" className="custom-text-area" />
              </Form.Group>
              <button type="submit" className="send-button">
                SEND
              </button>
            </Form>
          </Col>
          <Col md={6}>
            <h1 className="title">Stay In Touch</h1>
            <p className="main-text">{subscribeMessage}</p>
            <img className="subscribe-image" alt="subscribe" src={withPrefix('./icons/email-icon.png')} />
            <Form.Group controlId="subscribe-form">
              <Form.Control type="email" placeholder="E-Mail" />
            </Form.Group>
            <button type="submit" className="send-button subscribe">
              SUBSCRIBE
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Contact.propTypes = {
  contactMessage: PropTypes.string,
  subscribeMessage: PropTypes.string,
}