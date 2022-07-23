## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ProfileDetail Component

This is a resuasble component for the user profile section of a website. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import ProfileSection from "../components/ProfileDetail";`

## How to handle props to the component

```
<ProfileSection
    description="I am a fully qualified person with experience in electrical working"
    userDetails= {
    "Full Name:": "John Doe",
    "User Name:": "JD1234",
    "Location:": "Colombo",
    "Mobile Number:": "+945687742",
    "Email:": "john@gmail.com",
  },
/>
```

`description` prop is the description about user info
`userDetails` prop is the object of user details like full name, email, mobile number etc.
