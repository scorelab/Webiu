## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the DetailedFooter Component

This is a resuasble component for dispalying the footer with detailed information. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import Footer from "../components/DetailedFooter"`

## How to handle props to the component

```
<Footer contactNumber="+94555555555" email="Email"
                          privacyPolicyLink="Link to privacy policy page"
                          facebookLink="Link to facebook page"
                          twitterLink="Link to twitter page"
                          instragramLink="Link to instragram page"/>
```

`contactNumber` prop is the mobile number of the organization
`email` prop is the email of the organization
`privacyPolicyLink` is the path to privacy & policy page of the organization
`facebookLink` is the path to facebook page of the organization
`twitterLink` is the path to twitter page of the organization
`instragramLink` is the path to instragram page of the organization
