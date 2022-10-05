## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Call to action Cards Component

This is a resuasble component for displaying call to action cards. This Component is highly reusable and customizable via props, it is mostly used in the mid section of the site

## How to use the component

Import the component to `pages/index.js`
`import {CtaCard} from "../components/CtaCard";`

## How to handle props to the component

```
<CtaCard  image = "Sample-image"  description = "sample-description"  buttonLink = "sample-button-link"
 buttonText ="sample-button-text" />
```

`buttonText`: prop is use to add the text of the button
`buttonlink` : prop is use to add the link to the button
`description`: prop is use to display the description about the service or feature.
`image`: prop is the path of image
