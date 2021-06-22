## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Timeline Component

This is a resuasble component for the timeline of an organization through the years. This could be used to show the journey of a person or an organization. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {Timeline} from "../components/Timeline";`

## How to handle props to the component

```
<Timeline header="Timeline component" height="1200px"
          data={[{text: 'sample', date: 'Feb 23 2021', category: {tag: 'GSoC', color:'black'}, link: {url: 'sample', text: 'sample'}}]} />
```

`header` prop is the title of the section
`height` prop is the maximum height to be passed depending on the length of data
`data` prop is the array of objects of data which we wish to display on the timeline
