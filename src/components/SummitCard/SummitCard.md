## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SummitCard Component

This is a resuasble component for displaying data related to conferences in card format. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`

`import SummitCard from "../components/SummitCard";`

## How to handle props to the component

```
<SummitCard 
      title = "sample-title"
      subText= "sample-subtext"
      emptyMessage= "sample-empty-message"
      cardData =  {[
        {
            image:"image-source",
            title:"card-title",
            description:"card-discription-content",
        }
    ]}
/> 
```
`title` prop is the title at the beginning of the component
`subText` prop is the sub heading or additional info related to the content of component
`emptyMessage` prop is the message to be displayed when there is no card data
`cardData` prop is an array containing data to be displayed in cards ( the object inside the array contains cardtitle , card content and image source)


