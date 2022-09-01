## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the UserDetail Component

This is a resuasble component for showing user details and save the details. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import UserDetail from "../components/UserDetail";`

## How to handle props to the component

```
<UserDetail cancelHandler={()=>{console.log("cancel")}} saveHandler={()=>{console.log("save")}} logoutHandler={()=>{console.log("logout")}} />
```

`cancelHandler` prop is the function that trigger after cancel button pressed
`saveHandler` prop is the function that trigger after save button pressed
`logoutHandler` prop is the function that trigger after logout button pressed
