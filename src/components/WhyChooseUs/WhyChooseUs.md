## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the WhyChooseUs Component

This is a reusable component for displaying how different a company is and what factors are unique about us, it contains a heading, description, subText and the main Image. This can be very useful if you want to display some exclusive features or services in the mid section of the site. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {WhyChooseUs} from "../components/WhyChooseUs";`

## How to handle props to the component

```
<WhyChooseUs mainText="sample-heading-text" subText="sample-subtext-para"  image="/" description ="sample-description"/>
```

`mainText` prop is the heading that you want to display
`subText` prop is the description of the section
`image` prop is the path of image
`description` prop is use to display the description.
