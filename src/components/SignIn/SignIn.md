## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SignIn Component

This is a resuasble signin component for the website. It can be used in the signin page of the web site. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import SignIn from "../components/SignIn";`

## How to handle props to the component

```
<SignIn emailHelperText='Email is invalid' passwordHelperText='Password is too short' signInHandler={()=>{console.log("Function is called")}} signupUrl='/signup'  />
```

`emailHelperText` prop is used to display error message when email is incorrect
`passwordHelperText` prop is used to diplay error message when password is not secure
`signInHandler` prop is the the function which is called after press the signin button
`signupUrl` prop is the signup page url
