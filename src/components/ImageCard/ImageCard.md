## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ImageCard Component

This is a resuasble component for displaying a card with image and title. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import ImageCard from "../components/ImageCard";`

## How to handle props to the component

```
<ImageCard imageUrl="image url" moduleName="title" height="card height" width="card width" imageHeight="image height" onClickHandler={function} />
```

`imageUrl` prop is the url of image
`moduleName` prop is the title of the card
`height` prop is the height of the card. Default is set to 300px
`width` prop is the width of the card. Default is set to 300px
`imageHeight` prop is the image height of the card. Default is set to 180px
`onClickHandler` prop is the function which trigger when user press the bottom button
