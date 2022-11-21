## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Gallery Component

This is a reusable component for the gallery built from scratch. It could be used to display pictures of flexible sizes. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {Gallery} from "../components/Gallery";`

## How to handle props to the component

```
<Gallery  subText="Memories" mainText="Past Year Gallery" data={[{image: "sample image URL", title: "sample image title"}]} />
```

`subText` prop of type text is the subtitle for the gallery
`mainText` prop of type text is the main title for gallery
`data` prop is the array of image-sources along with image-titles