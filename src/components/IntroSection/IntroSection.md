## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Intro section Component

This is a resuasble component for the intro section of a webiste. It can be used to display the intro Section information of website. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {IntroSection} from "../components/IntroSection";`

## How to handle props to the component

```
<IntroSection mainText="sample-heading-text" subText="sample-subtext-para" description="sample-description" image="/"  buttonLink="sample-link" buttonText="sample-text"/>
```

`mainText` prop is the heading that you want to display
`subText` prop is the subtext of the section
`description` prop is the description of the section
`buttonText` is the text displayed for the button
`buttonLink` is the URL where the button will take us when clicked
`image` is the path of image
