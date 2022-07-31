## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the DetailCardGrid Component

This is a resuasble component that contain three services cards arrange in a particular order. It could be used to display important information seperated from each other. This Component is highly reusable and customizable via props, This card don't have any redirection link this card is just use for display info about specifc feature or service.

## How to use the component

Import the component to `pages/index.js`
`import {DetailCardGrid} from "../components/DetailCardGrid";`

## How to handle props to the component

```
<ServicesCardGrid data=[{titleOne="sample-title" , descriptionOne="sample-description}, gridHeading="sample-heading"] />
```
`gridHeading` prop is use to add the heading for the cards grid
`data` prop is use to add the data for the cards 