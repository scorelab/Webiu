## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Progress-Bar Component

This is a resuasble component for showing progress or measure of a task or skill. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ProgressBar} from "../components/ProgressBar";`

## How to handle props to the component

```
<ProgressBar data={[{bgcolor: "#51ad28", completed: 80, text: "EXAMPLE 1"}]} colHeight={25} colWidth="300px" />
```

`data` prop is the array of data of various of progress-bars we wish to show
`colHeight` and `colWidth` props are the customized height and width of the bar
