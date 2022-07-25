## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Values Component

This is a reusable component for representing "Our Values" or "Pillars of the org". This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Values} from "../components/Values";`

## How to handle props to the component

```
<Values title="sample-title"
        image="sample-image"
        data={[{list: "sample-text"]} />
```

`title` prop is the title of the section
`image` prop is the main Image of the secton
`data` prop is the list data of the values
