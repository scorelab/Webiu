## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Project Gallery Card Component

This is a resuasble component for the Project Gallery Card it use to add info about diffrent projects in form of a card. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ProjectGalleryCard} from "../components/ProjectGallery";`

## How to handle props to the component

```
<ProjectGalleryCard image="sample-image" description="sample-description" button1Text="sample-text" button2Text="sample-text" button1Link="sample-link" button2Link="sample-link"/>
```

`image` prop is the main title or heading for the banner
`description` prop is the subtext or side text for the banner
`buttonText` prop is the text for the button to be displayed 
`buttonLink` prop is the link for the button to be redirected