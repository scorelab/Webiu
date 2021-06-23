## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the Timestamp Component
This is a resuasble component for a generalized timestamp. This could be used for greeting the users and as a landing component. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {Timestamp} from "../components/Timestamp";`

## How to handle props to the component
```
<Timestamp image="sample-img" firstName="SCoRe Lab" buttonText="Home" buttonLink="/" message="sample-message" />
```

`image` prop is the path to image
`firstName` prop is the name of the user whom we wish to greet
`buttonText` and `buttonLink` are the text and link of the transiting button
`message` prop is optional and is a string of message