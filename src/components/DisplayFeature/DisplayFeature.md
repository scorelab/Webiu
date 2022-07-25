## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the DisplayFeature Component

This is a resuasble component for dispalying detailed information or description of any feature along with images and description. This Component is highly reusable and customizable via props, it is mostly used in the mid section of the site

## How to use the component

Import the component to `pages/index.js`
`import {DisplayFeature} from "../components/DisplayFeature";`

## How to handle props to the component

```
<DisplayFeature mainText="sample-heading-text" subText="sample-subtext-para"  image="/" description="sample-description" SubData={[{SubImage: "sample-image-path", subDataHeading: "sample-heading", subDataText:"sample-text"}]}/>
```

`mainText`: prop is the heading that you want to display
`subText`: prop is use to display the sub text or one Liner about the feature
`description`: prop is use to display the description about the service or feature.
`image`: prop is the path of image
`SubData`: prop is use to display the sublist of images along with heading and description
