## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GuideLines Component

This is a resuasble component for the guidelines in a website. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GuideLines} from "../components/GuideLines";`

## How to handle props to the component

```
<GuideLines heading="Guidelines" description="These are some guidelines"
            guidelines={["Introduce yourself to community", "Look for issues", "Resolve and PR"]} />
```

`heading` prop is the heading of the section
`description` prop is the description paragraph of the section
`guidelines` prop is the array of guidelines which are rendered as bullet points
