## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the BloGrid Component

This is a resuasble component for the BlogGrid component. It could be used to display the content of the latest blogs. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {BlogGrid} from "../components/BlogGrid";`

## How to handle props to the component

```
<BlogGrid headingText="sample-text" data={[{
        cardImage: "sample-image-url",
        cardHeadingText: "sample-blog-card-heading-text",
        cardDescriptionText: "sample-blog-card-description-text"}]} />
```
### sample data suggests the data you want to show at the component.

`headingText`: props of type text, it is heading text of the BlogGrid component.
`cardImage`: props of the blog card image url.
`cardHeadingText` and `cardDescriptionText`: props of type text are the blog card's heading and card's description text.
