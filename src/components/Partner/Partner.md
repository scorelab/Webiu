## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Partner Component

This is a resuasble component for a partner-with-us template. This could be used for improving partnership in any project. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Partner} from "../components/Partner";`

## How to handle props to the component

```
<Partner header="Partner-With-Us" mainText="Collaborate with us" contactText="contact us" contactLink="/" buttonText="Form" buttonLink="/"
         image="sample-path" subText="description" backgroundColor="sample" />
```

`image` prop is the path to the image
`mainText`, `subText` and few other props are texts to be passed
`backgroundColor` is the customized prop to decide bg-color of the section
`contactLink` and `buttonLink` are the links where we wish to navigate
