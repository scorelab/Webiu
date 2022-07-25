## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ClickableCard Component

This is a resuasble component for a generalized card which can be clickable. This could be used for display a card including image & description and by clicking this card can navigate to other route. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import ClickableCard from "../components/ClickableCard";`

## How to handle props to the component

```
<ClickableCard name="alt-name" img="sample-image" title="Score Lab" description="Welcome All" />
```

`name` prop is the alt for image
`img` prop is the path to image
`link` prop is the navigation link which will navigate to
`title` prop is the first text after the image
`description` prop is the second text after the image
`containerStyle` prop is the style for othe uter container
`innerContainerStyle` prop is the style for the container which include image and text
`imageContainerStyle` prop is the style for the container which include image
`imageStyle` prop is the style for the image
