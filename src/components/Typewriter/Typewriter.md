## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Typewriter Component

This is a resuasble component for producing the typewriter effect. This is one of the very widely used functions. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {Typewriter} from "../components/Typewriter";`

## How to handle props to the component

```
<Typewriter header="Typewriter" wait={100} color="sample-color" staticText="static-text"
            words={["DEVELOPER", "PROGRAMMER", "DEBUGGER"]} />
```

`header` and `staticText` props are the title and static part of the section
`wait` prop is the milliseconds to wait before next character
`color` prop is the color of the text
`words` prop is the array of words on which we wish to apply the effect
