import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import "./style.sass"
import Login from './Login'

export const LoginComponent = ({loginMessage}) => {
  const [login, setLogin] = useState(false); // boolean to be set true if validated

  const handleLogin = (email, password) => {
    //console.log(email);
    //console.log(password);
    setLogin(true); // Any other validation needs to go in here
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  )
}

LoginComponent.propTypes = {
  loginMessage: PropTypes.string,
}
