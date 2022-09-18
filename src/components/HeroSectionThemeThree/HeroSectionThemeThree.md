## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Hero section Component

This is a highly resuasble component for the Hero section of a webiste. It can be used to display the Hero Section information of a particular section with suitable images. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {HeroSectionThemeThree} from "../components/HeroSectionThemeThree";`

## How to handle props to the component

```
<HeroSectionThemeThree mainText="sample-heading-text" subText="sample-subtext-para" buttonText="button" buttonLink="/" contributeLink = "/" contributeText="sample-text" image="sample-url />
```

`mainText` prop is the heading that you want to display
`subText` prop is the subtext of the section
`buttonText` and `contributeText` is the text displayed for the buttons (optional)
`buttonLink` and `contributeLink` is the URL where the buttons will take us when clicked
`description` is the description of the section
`image` is the path of image
