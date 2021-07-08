## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SignupAndLogin Component

This is a resuasble component for the login and signup screen of websites. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {SignupAndLogin} from "../components/SignupAndLogin";`

## How to handle props to the component

```
<SignupAndLogin signupMessage="Signup" loginMessage="Login" handleSignup={signup-function} handleLogin={login-function} />
```

`signupMessage` and `loginMessage` props are the messages for signup anf login
`handleSignup` and `handleLogin` props are the functions of logging and signing up
