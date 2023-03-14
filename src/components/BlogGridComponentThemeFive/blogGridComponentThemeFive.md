## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the mid-section Component

This is a resuasble component for displaying the information in a two grid system where the first section is to show main features in cards
and the second section provides a title and description. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {BlogGridThemeFive} from "../components/BlogGridComponentThemeFive";`

## How to handle props to the component

```
<BlogGridThemeFive
heading="sample-Text"
cardItems=[{img:"sample url" , cardHead:"sample-heading",cardPara:"sample-text"}]
/>
```

`heading`: prop of type text is the mainText of the section
`countItems`: prop of type array is the array of cardItems each having an time  and duration