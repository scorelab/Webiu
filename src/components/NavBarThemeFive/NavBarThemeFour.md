## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the NavBarThemeFive Component

This is a resuasble component for the to most navbar of a website. It is one of the most common things you will ever see in any website. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {NavBarThemeFive} from "../components/NavBarThemeFive";`

## How to handle props to the component

```
<NavBarThemeFive logo="logo-path" logoStyle={object-of-styles}
        links={[{path: "sample-link", isActive: {false}, name: "link-text"}]} ButtonLink={sample-link} ButtonTex={sample-text} />
```

`logo` prop is the path of the logo to be shown
`logoStyle` prop is the custom styling of logo e.g. maargin-left: 2px
`links` prop is the array the nav-links where we wish to go
`ButtonLink` prop is used to add the path to link on button
`ButtonText` prop is used to add the text on the button
