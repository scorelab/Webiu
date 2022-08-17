## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Docs Banner Component

This is a resuasble component for the Docs Banner section. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {DocsBanner} from "../components/DocsBanner";`

## How to handle props to the component

```
<DocsBanner header="Frequently Asked Questions" bgColor="color"
     titleColor="color" toggleColor="color"
     data={[{title: "sample-question", content: "sample-answer"}]} />
```

`mainText` prop is the main title or heading for the banner
`subText` prop is the subtext or side text for the banner
`buttonText` prop is the text for the button to be displayed 
`buttonLink` prop is the link for the button to be redirected