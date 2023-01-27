## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the mid-section Component

This is a resuasble component for displaying the information in a two grid system where the first section is to show main features in cards
and the second section provides a title and description. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {MidSectionThemeThree} from "../components/MidSectionThemeThree";`

## How to handle props to the component

```
<MidSectionThemeThree
mainText="sample-Text"
subText="sample-Text"
cardItems="{[{image: "sample image url, label: "sample image label"}]}"
linkUrl="sample-url"
linkText="sample-url"
/>
```

`mainText`: prop of type text is the mainText of the section
`subText`: prop of type text is the subText of the section
`cardItems`: prop of type array is the array of cardItems each having an image url and label
`linkUrl`: prop of type text is the url present in the section
`linkText`: prop of type text is label for the link present in the section
