import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Modal, Button } from "react-bootstrap"

export const OnClickModal = ({
  buttonText,
  ModalHeading,
  ModalBody,
  FooterBtn1Text,
  FooterBtn2Text,
}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="Modal">
      <Button className="main-button btn-success" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{ModalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ModalBody}</Modal.Body>
        <Modal.Footer>
          <Button className="footer-btn1 btn-success" onClick={handleClose}>
            {FooterBtn1Text}
          </Button>
          <Button className="footer-btn2 btn-success" onClick={handleClose}>
            {FooterBtn2Text}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

OnClickModal.propTypes = {
  buttonText: PropTypes.string,
  ModalHeading: PropTypes.string,
  ModalBody: PropTypes.string,
  FooterBtn1Text: PropTypes.string,
  FooterBtn2Text: PropTypes.string,
  onClick: PropTypes.func,
}
