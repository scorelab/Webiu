import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col, Form} from 'react-bootstrap'

const Login = ({loginMessage, handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    //console.log(email);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
    //console.log(password);
  }

  return (
    <div className="signup-component" style={{ backgroundImage: 'url(./images/dots.png)' }}>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="title">Log In</h1>
            <p className="main-text">{loginMessage}</p>
            <Form>
              <Form.Group controlId="contact-form">
                <Form.Control type="email" name="email" placeholder="E-Mail" value={email} onChange={handleEmail} />
                <Form.Control type="text" name="password" placeholder="Password" value={password} onChange={handlePassword} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <button type="submit" className="signup-button" onClick={() => handleLogin(email, password)}>
                LOG IN
              </button>
            </Form>
            <br />
            <p>New to us? Register here <a href="/register">Register</a></p>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

Login.propTypes = {
  loginMessage: PropTypes.string
}

export default Login
