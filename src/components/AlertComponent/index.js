import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col, Button, Alert} from 'react-bootstrap'

export const AlertComponent = ({ buttonText, alertText, alertVariant, buttonVariant }) => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    const newAlert = (!showAlert)
    setShowAlert(newAlert);
  }

  return (
       <Container className="container">
          <div>
          {showAlert ?
            <Alert variant={alertVariant} onClose={toggleAlert} dismissible>
               <p>{alertText}</p>
            </Alert>
          : null}
          </div>
          <div className="alert-button">
            { buttonText ? <Button variant={buttonVariant} onClick={toggleAlert}>{buttonText}</Button> : null}
          </div>
       </Container>
  )
}

AlertComponent.propTypes = {
  buttonText: PropTypes.string,
  alertText: PropTypes.string,
  alertVariant: PropTypes.string,
  buttonVariant: PropTypes.string
}
