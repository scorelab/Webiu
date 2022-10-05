## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Card Component

This is a resuasble component for the card and services built from scratch in a form of a grid. It could be used to display important information seperated from each other. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {CardThemeFourGrid} from "../components/CardThemeFourGrid";`

## How to handle props to the component

```
<CardThemeFourGrid image="sample-image-path"
      dataUpperGrid={[{image: "sample", description: "sample", title="sample-title"}]} dataLowerGrid={[{image: "sample", description: "sample", title="sample-title"}]} />
```

`image` props is the backgournd image of the section
`dataUpperGrid` prop is the data of the upper gird
`dataLowerGrid` prop is the data of the lower gird
