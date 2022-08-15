## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the WelcomeContainer Component

This is a resuasble component for welcome container on websites. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import WelcomeContainer from "../components/WelcomeContainer";`

## How to handle props to the component

```
<WelcomeContainer styledTitle="Styled title" title="title with normal text" firstPara="first paragraph of container" secondPara="second paragraph of container" />
```

`styledTitle` prop is the title of the welcome container with additional styles
`title` prop is the welcome container with normal title styles
`firstPara` and `secondPara` props are the paragraphs of the welcome container
