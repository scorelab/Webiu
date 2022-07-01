## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the InfoComponent Component

This is a resuasble component for displaying grid of two images along with text as a sub section. This can be very useful you want to display some exclusive feature in the mid section of the site. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {InfoComponent} from "../components/InfoComponent";`

## How to handle props to the component

```
<InfoComponent mainText="sample-heading-text" subText="sample-subtext-para"  image="/" SubData={[{SubImage: "sample-image-path", subDataHeading: "sample-heading", subDataText:"sample-text"}]}/>
```

`mainText` prop is the heading that you want to display
`subText` prop is the description of the section
`image` prop is the path of image
`SubData` prop is use to display the sublist of images along with heading and description
