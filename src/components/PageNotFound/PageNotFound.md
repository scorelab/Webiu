## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the PageNotFound Component

This is a resuasble component which is used in case the requested page is not found, or a bad request or any other glitch. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {PageNotFound} from "../components/PageNotFound";`

## How to handle props to the component

```
<PageNotFound image="sample-path mainText="sample-text" subText="sample-subText" />
```

`image` prop is the path to the image which we wish to show on 404 error
`mainText` and `subText` props are the text to be displayed
