import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col, Form} from 'react-bootstrap'

const Signup = ({signupMessage, handleSignup}) => {
  return (
    <div className="signup-component" style={{ backgroundImage: 'url(./images/dots.png)' }}>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="title">Sign up</h1>
            <p className="main-text">{signupMessage}</p>
            <Form>
              <Form.Group controlId="contact-form">
                <Form.Control type="text" name="name" placeholder="Name" />
                <Form.Control type="email" name="email" placeholder="E-Mail" />
                <Form.Control type="text" name="password" placeholder="Password" />
              </Form.Group>
              <button type="submit" className="signup-button" onClick={handleSignup}>
                SIGN UP
              </button>
            </Form><br />
            <p>Already have an account with us? <a href="/login">Login</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Signup.propTypes = {
  signupMessage: PropTypes.string
}

export default Signup
