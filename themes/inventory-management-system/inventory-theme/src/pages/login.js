import React from "react"
import Login from "../components/login"

const LoginPage = () => {
  return (
    <Login
      name="NetSuiteLabs"
      typeWriteWords={["Effective", "Simple", "Elegant"]}
      typeWriterHeader="NetSuiteLabs system is"
      submitHandler={() => {}}
    />
  )
}

export default LoginPage
