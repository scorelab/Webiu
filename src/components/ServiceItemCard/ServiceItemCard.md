## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ServiceItemCard Component

This is a resuasble component for the feature and services built from scratch. It could be used to display important information seperated from each other. This Component is highly reusable and customizable via props, This card don't have any redirection link this card is just use for display info about specifc feature or service.

## How to use the component

Import the component to `pages/index.js`
`import {ServiceItemCard} from "../components/ServiceItemGrid";`

## How to handle props to the component

```
<ServiceItemCard image="sample-image" title="sample title="sample-title" description="sample-description" />
```

`image` prop is used to display the main image of the card
`title` prop is used to add the title to the card/feature
`description` prop is used to add the description of the feature
`buttonText` prop is used to add text to buttton
`buttonLink` prop is used to link to the button 