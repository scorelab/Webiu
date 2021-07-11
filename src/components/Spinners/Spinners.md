## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Spinners Component

This is a resuasble component for the spinners needed. It can be used during the loading time of a webiste. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Spinners} from "../components/Spinners";`

## How to handle props to the component

```
<Spinners animation="border" variant="success" size="md"
          icon={false} spinner={false} image="image-path" />
```

`animation` prop is the desired animation, default to border
`variant` prop is the colour of the spinner
`size` prop is the size of loader
`icon` and `spinner` props are the boolean to determine which loader to show
`image` prop is the path to image
