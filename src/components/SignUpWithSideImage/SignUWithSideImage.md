## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SignUpWithSideImage Component

This is a reusable sign up component for the website. It can be used in the sign up page of the web site. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import SignUpWithSideImage from "../components/SignUpWithSideImage";`

## How to handle props to the component

```
<SignUpWithSideImage
    imgUrl="https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE2MjEzMzgx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
    signInUrl="/login"
    signUpHandler={() => {}}
/>
```

`imgUrl` prop is the url of side image
`signInUrl` prop is the sign in page url
`signUpHandler` prop is the the function which is called after press the sign up button