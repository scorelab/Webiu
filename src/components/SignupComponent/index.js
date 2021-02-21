import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import Signup from './Signup'

export const SignupComponent = ({signupMessage}) => {

  const handleSignup = () => {
    console.log("Edit this code with what you wish to do with the signup form");
  }

  return (
    <div>
      <Signup handleSignup={handleSignup} />
    </div>
  )
}

SignupComponent.propTypes = {
  signupMessage: PropTypes.string,
}
