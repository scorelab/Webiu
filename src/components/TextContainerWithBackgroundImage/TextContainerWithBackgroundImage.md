## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the TextContainerWithBackgroundImage Component

This is a resuasble component for showing text on the background image with dark overlay. This could be used for header banner for website. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import TextContainerWithBackgroundImage from "../components/TextContainerWithBackgroundImage";`

## How to handle props to the component

```
<TextContainerWithBackgroundImage
        firstHeader="Cloud Hotel"
        secondHeader="#1 Hotlel & Restaurent Management Application"
        height="500px"
      />
```

`firstHeader` prop is the first header of the component
`secondHeader` prop is the second header of the component
`height` prop is used to control the height of the image in pixels
