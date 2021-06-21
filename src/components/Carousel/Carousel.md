## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Carousel Component

This is a resuasble component for the footer of a website. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Carousel} from "../components/Carousel";`

## How to handle props to the component

```
<Carousel data={[{title: "LabelLab", content: "sample-content",image: "sample-path"},
                 {title: "Dronesym", content: "sample-content", image: "sample-path"},
                 {title: "Senz", content: "sample-content", image: "sample-path"}]}
                 header="Carousel" />
```

`data` prop is the array of data which we wish to render on different slides
`header` prop is the string which is the title of section
