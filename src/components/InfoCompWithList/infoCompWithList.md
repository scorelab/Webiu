## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the InfoCompWithList Component

This is a resuasble component for displaying informations about any feature or services, it contain a heading, description, subText, a main Image and a nice looking list for explaining services or diffrent check lists about a feature. This can be very useful you want to display some exclusive feature or services in the mid section of the site. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {InfoCompWithList} from "../components/InfoCompWithList";`

## How to handle props to the component

```
<InfoCompWithList mainText="sample-heading-text" subText="sample-subtext-para"  image="/" description ="sample-description"/>
```

`mainText` prop is the heading that you want to display
`subText` prop is the description of the section
`image` prop is the path of image
`description` prop is use to display the description about the service or feature.
