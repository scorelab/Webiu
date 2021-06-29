## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GoogleMap Component

This is a resuasble component for displaying maps of a place. This could be used in the footer of an organization. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {GoogleMap} from "../components/GoogleMap";`

## How to handle props to the component

```
<GoogleMap mapId="sample-map-id" header="Map" width="1000px" height="500px" />
```

`mapId` prop is the map id of the place authenticated
`header` prop is the heading of the section
`width` and `height` prop is the width and height of the map component
