## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Project Detail Card Component

This is a resuasble component for the Project Detail Card it use to add info about diffrent projects in form of a card. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ProjectDetailCard} from "../components/ProjectDetailCard";`

## How to handle props to the component

```
<ProjectDetailCard image="sample-image" description="sample-description" buttonText="sample-text" buttonLink="sample-link"/>
```

`image` prop is the main title or heading for the banner
`description` prop is the subtext or side text for the banner
`buttonText` prop is the text for the button to be displayed 
`buttonLink` prop is the link for the button to be redirected