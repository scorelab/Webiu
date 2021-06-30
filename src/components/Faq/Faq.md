## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Faq Component

This is a resuasble component for the Frequently Asked Questions section. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Faq} from "../components/Faq";`

## How to handle props to the component

```
<Faq header="Frequently Asked Questions" bgColor="color"
     titleColor="color" toggleColor="color"
     data={[{title: "sample-question", content: "sample-answer"}]} />
```

`header` prop is the title of the section
`data` prop is the array of questions and answers
`bgColor`, `titleColor` and `toggleColor` are the colours of backgroud, text and chevron
`message` prop is optional and is a string of message
