## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SignInWithSideImage Component

This is a resuasble signin component for the website. It can be used in the signin page of the web site. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import SignInWithSideImage from "../components/SignInWithSideImage";`

## How to handle props to the component

```
<SignInWithSideImage
    imgUrl="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjI3OTM5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
    signUpUrl="/signUp"
    signInHandler={() => {}}
/>
```

`imgUrl` prop is the url of side image
`signUpUrl` prop is the signup page url
`signInHandler` prop is the the function which is called after press the signin button
