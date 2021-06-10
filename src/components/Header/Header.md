## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Header Component

This is a resuasble component for the header of a webiste. It can be used to display the header information of a particular section. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Header} from "../components/Header";`

## How to handle props to the component

```
<Header mainText="About us" subText="sample-subtext-para" buttonText="button" buttonLink="/" icon="sample-font-awesome-icon"
        image="sample-image-path" small={false} />
```

`mainText` prop is the heading that you want to display
`subText` prop is the description of the section
`buttonText` is the text displayed for the button
`buttonLink` is the URL where the button will take us when clicked
`icon` is the font-awesome icon you want to display
`image` is the path of image
`small` prop is a bool which decides what parts we actually want to render
