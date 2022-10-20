import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Row, Col, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const AuthComponent = ({ mainText, image, handleContactSubmit }) => {
  const [email, setEmail] = useState("")

  const handleEmail = e => setEmail(e.target.value)

  return (
    <>
      <div className="AuthWrapper">
        <Row>
          <Col
            md={5}
            className="AuthCompLeft"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h1 className="AuthBannerText">
              Home for the next generation of builders
            </h1>
          </Col>
          <Col md={7} className="AuthCompRight">
            <h1 className="AuthMainHeading">{mainText}</h1>
            <Form onSubmit={handleContactSubmit(email)}>
              <Form.Group controlId="contact-form">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="AuthCustomField"
                  onChange={handleEmail}
                  required
                />
              </Form.Group>
              <button type="submit" className="AuthGitButton">
                <FontAwesomeIcon icon={faGithub} className="authGitIcon" />
                Continue with Github
                <FontAwesomeIcon className="authArrowIcon" icon={faArrowRight} />
              </button>
              <p> or </p>
              <button type="submit" className="AuthGoogleButton">
                <FontAwesomeIcon icon={faGoogle}  className= "authGoogleIcon"/>
                Continue with Google
                <FontAwesomeIcon className="authArrowIcon" icon={faArrowRight} />
              </button>
              <p className="authMessage">
                By continuing, you acknowledge that you have read, understood,
                and agree to our terms of service and privacy policy
              </p>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}

AuthComponent.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  image: PropTypes.string,
  handleContactSubmit: function() {},
}
