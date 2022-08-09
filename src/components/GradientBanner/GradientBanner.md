## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GradientBanner Component

This is a reusable component for displaying information or any redirecting button on a gradient banner with a heading and tagline. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GradientBanner} from "../components/GradientBanner";`

## How to handle props to the component

```
<GradientBanner  bannerImage = "sample-image-path" mainHeading = "sample-heading" tagLine = "sample-tagline" buttonText = "sample-text" buttonLink = "sample-link" />

```

`bannerImage` this prop is use to add the desired background image to the banner
`mainHeading` this prop is use to add the main heading of the banner
`tagLine` this prop is use to addthat tagline on the gradient banner
`buttonText` and `buttonLink` are the text and link of the transiting button
