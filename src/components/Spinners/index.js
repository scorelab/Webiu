import React from "react"
import PropTypes from "prop-types"
import { Spinner } from "react-bootstrap"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { propTypes } from "react-bootstrap/esm/Image";

export const Spinners = ({ spinner, animation, variant, size, image, icon }) => {

  return (
    <div className="spinner-component">
        {image ? 
          <div>
            <img src={image} alt="logo" className="preloader img-fluid" />
          </div>
         : null}
        {icon ? 
           <div className="loader">
             <FontAwesomeIcon className="center" icon={faSpinner} />
           </div>
         : null}
        {spinner ? 
           <Spinner className="bootstrap-spinner" animation={animation} variant={variant} size={size} /> 
        : null}
    </div>
  )
}

Spinners.propTypes = {
  animation: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.bool,
  spinner: propTypes.bool
}