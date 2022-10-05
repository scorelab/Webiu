## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ServiceSection Component

This is a resuasble component that contain diffrent services grid arrange in a particular order. It could be used to display important information seperated from each other. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {ServiceSection} from "../components/ServiceSection";`

## How to handle props to the component

```
<ServiceSection subText= "sample-text" mainText= "sample-text" dataUpperGrid={subImage="sample-image" ,subSectionPara="sample-para", subSectionHeading="sample-text"} dataLowerGrid={subImage="sample-image" ,subSectionPara="sample-para", subSectionHeading="sample-text"} />
```

`subText` prop is the subtext of the section
`mainText` prop is the main text of the section
`dataUpperGrid` prop is the upper grid of the services section
`dataLowerGrid` prop is the lower grid of the services section
