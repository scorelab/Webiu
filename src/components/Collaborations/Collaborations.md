## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Collaborations Component

This is a resuasble component for a trusted-by, collaborations or newsletter apparances. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Collaborations} from "../components/Collaborations";`

## How to handle props to the component

```
<Collaborations title="sample-title" column={2}
           description="sample-description"
           data={[{img: "sample-path", text: "sample-text"}]} />
```

`title` prop is the title of the section
`column` prop is the number of org we wish to show per row
`description` prop is the description of section
`data` prop is the array of items we wish to show
