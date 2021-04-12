import React from "react"
import PropTypes from "prop-types"
import { Spinner } from "react-bootstrap"


export const Spinners = ({ animation, variant, size }) => {

  return (
    <div>
      <center>
        {animation ? <Spinner animation={animation} variant={variant} size={size} /> : <Spinner animation="border" variant={variant} size={size} />}
      </center>
    </div>
  )
}

Spinners.propTypes = {
  animation: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
}
