## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Sponsors Component

This is a reusable component for the sponsors built from scratch. It could be used to display partners and sponsors for scorelab. The component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {Sponsors} from "../components/Sponsors";`

## How to handle props to the component

```
<Sponsors
   subText="PARTNERS AND SPONSORS"
   mainText="OFFICIAL SPONSORS"
   sponsorsList={[{name: "sample sponsor name", image: "sample image url"}]}
   messagesList={[{text: "sample mainText", speaker: "sample speaker name", position: "sample position", image: "sample image url"}]}
/>
```

`subText` prop of type text is the subtitle for the schedule
`mainText` prop of type text is the main title for schedule
`sponsorsList` prop of type array having the logo image and name of all the sponsors
`messagesList` prop is the array of messages each having text, speaker, position and image.
