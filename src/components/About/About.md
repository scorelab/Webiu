## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the About Component

This is a resuasble component for the about component. It could be used to display what the organization does and what is its motto and all. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {About} from "../components/About";`

## How to handle props to the component

```
<About header="sample-text" mainText="sample" buttonText="sample" buttonLink="/"
       image="sample-path" subText="sample-description" backgroundColor="sample" />
```

`header`, `mainText` and `subText` props are the title, main-heading and description of section
`buttonLink` and `buttonText` prop is the link and text of the button
`image` and `backgroundColor` props are the image path and custom bg color to be passed
