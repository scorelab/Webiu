## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the IndividualCard Component

This is a resuasble component for the feature and services built from scratch. It could be used to display important information seperated from each other. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {IndividualCard} from "../components/ImageGrid";`

## How to handle props to the component

```
<IndividualCard image="sample-image" iconImage="sample-icon" title="sample title="sample-title" description="sample-description" buttonText="sample-button-text" buttonLink="sample-button-link" />
```

`image` prop is used to display the main image of the card
`iconImage` prop is used to display the side icon
`title` prop is used to add the title to the card/feature
`description` prop is used to add the description of the feature
`buttonText` prop is used to add the desired text to the button
`buttonLink` prop is used to add the link to the button
