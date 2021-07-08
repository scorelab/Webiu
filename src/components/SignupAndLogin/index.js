import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col, Form} from 'react-bootstrap'

export const SignupAndLogin = ({signupMessage, handleSignup, loginMessage, handleLogin}) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {setName(e.target.value)}
  const handleEmail = (e) => {setEmail(e.target.value)}
  const handlePassword = (e) => {setPassword(e.target.value)}

  return (
    <div>
      <Container>
        <Row>
        {signupMessage ? 
          <Col md={6}>
            <div className="signup-component">         
              <h1 className="title">Sign up</h1>
              <p className="main-text">{signupMessage}</p>
              <Form onSubmit={() => handleSignup(name, email, password)}>
               <Form.Group controlId="contact-form">
                <Form.Control type="text" name="name" 
                              placeholder="Name" onChange={handleName} />
                <Form.Control type="email" name="email" 
                              placeholder="E-Mail" onChange={handleEmail} />
                <Form.Control type="text" name="password" 
                              placeholder="Password" onChange={handlePassword} />
               </Form.Group>
               <button type="submit" className="signup-button" 
                       onClick={(e) => handleSignup(e, name, email, password)}>
                SIGN UP
               </button>
              </Form><br />
              <p className="signup-para">
                Already have an account with us? <a href="/login">Login</a>
              </p>
            </div>
          </Col> : null}

          {signupMessage ? 
          <Col md={6}>
            <div className="signup-component">         
              <h1 className="title">Log In</h1>
              <p className="main-text">{loginMessage}</p>
              <Form onSubmit={(email) => handleLogin(email, password)}>
               <Form.Group controlId="contact-form">
                <Form.Control type="email" name="email" 
                              placeholder="E-Mail" onChange={handleEmail} />
                <Form.Control type="text" name="password" 
                              placeholder="Password" onChange={handlePassword} />
               </Form.Group>
               <button type="submit" className="signup-button" 
                       onClick={(e) => handleLogin(e, email, password)}>
                LOG IN
               </button>
              </Form><br />
              <p className="signup-para">
                New to us? <a href="/signup">Signup</a>
              </p>
            </div>
          </Col> : null}
        </Row>
      </Container>
    </div>
  )
}

SignupAndLogin.propTypes = {
  signupMessage: PropTypes.string,
  handleSignup: PropTypes.func,
  loginMessage: PropTypes.string,
  handleLogin: PropTypes.func
}