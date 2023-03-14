## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the mid-section Component

This is a resuasble component for displaying the information in a two grid system where the first section is to show main features in cards
and the second section provides a title and description. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {MidSectionThemeFive} from "../components/MidSectionComponentThemeFive";`

## How to handle props to the component

```
<MidSectionThemeFive
mainText="sample-Text"
mainHead="sample-Text"
mainPara="sample-text"
button="sample-text"
img="sample-url"
secondHead="sample-text"
secondSubHead="sample-text"
countItems=[{time:"sample time" , duration:"duration"}]
/>
```

`mainText`: prop of type text is the mainText of the section
`mainHead`: prop of type text is the mainHeading/subtitle of the section
`mainPara`: prop of type text is the main paragraph present in the section
`button`: prop of type text is label for the botton present in the section
`img`: prop of type text is label for the imageURL present in the section
`secondHead`: prop of type text is label for the botton present in the section
`secondSubHead`: prop of type text is label for the botton present in the section
`countItems`: prop of type array is the array of cardItems each having an time  and duration
