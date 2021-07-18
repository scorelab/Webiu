## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Card Component

This is a resuasble component for the card and services built from scratch. It could be used to display important information seperated from each other. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Card} from "../components/Card";`

## How to handle props to the component

```
<Card header="Card" card={false} services={true} buttonText="All Services" buttonLink="/"
      data={[{image: "sample", title: "sample", description: "sample", buttonText: "sample", buttonLink: "/"}]} />
```

`header` prop is the title of the section
`data` prop is the array of information that we wish to publish in form of cards
`card` prop is the bool which shows whether to render card or `services` section
`buttonText` and `buttonLink` are the text and link of button
