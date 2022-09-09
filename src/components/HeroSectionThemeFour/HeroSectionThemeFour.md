## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Hero section Component

This is a resuasble component for the header of a webiste. It can be used to display the Hero Section information of a particular section. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {HeroSectionThemeFour} from "../components/HeroSectionThemeFour";`

## How to handle props to the component

```
<HeroSectionThemeFour mainText="sample-heading-text" subText="sample-subtext-para"  buttonText="sample-button-text" buttonLink="sample-button-link" image="/" />
```

`mainText` prop is the heading that you want to display
`subText` prop is the description of the section
`buttonText` is the text displayed for the button
`buttonLink` is the URL where the button will take us when clicked
`image` is the path of image
