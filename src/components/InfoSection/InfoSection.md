## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the InfoSection Component

This is a resuasble component for displaying informations about any feature or services, it contain a heading, description, subText, a grid of three iamges and a nice looking list for explaining services or features. This can be very useful you want to display some exclusive feature or services in the mid section of the site. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {InfoSection} from "../components/InfoSection";`

## How to handle props to the component

```
<InfoSection mainText="sample-heading-text" subText="sample-subtext-para"  infoListData={text="sample-text" image="sample-image" description = "sample-descrption"/>
```

`mainText` prop is the heading that you want to display
`subText` prop is the description of the section
`infoListData` prop is the info columns data of the section
