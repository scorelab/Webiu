## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Statistics Component

This is a resuasble component for showing the statistics of an organization or personal portfolio. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Statistics} from "../components/Statistics";`

## How to handle props to the component

```
<Statistics header="Statistics" title="title" description="sample-description"
            image="sample-path" data={[{name: "Users", stat: "10K"}]}
```

`image` prop is the path to image
`header` prop is the heading of the section
`title` and `description` props are the title and description of the text we wish to pass on
`data` prop is the array of details we wish to reflect on the page
