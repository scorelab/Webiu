## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the Contact Component
This is a resuasble component for contact and subscribe forms which are very common on modern websites

## How to use the component
Import the component to `pages/index.js`
`import {Contact} from "../components/Contact";`

How to handle props to the component
`<Contact contactMessage="Contact us" subscribeMessage="Subscribe us" />`

The Contact component is a combination of two components namely, `Contact us` and `Subscribe to Email` components where `contactMessage` and `subscribeMessage` are the two props which render different messages to the component heading