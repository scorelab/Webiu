## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SocialMedia Component

This is a resuasble component for embedding social media e.g. Twitter and Facebook on a website. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {SocialMedia} from "../components/SocialMedia";`

## How to handle props to the component

```
<SocialMedia facebookProfile="SCoRe.Lab.Org" twitterProfile="gsoc"
             header="Facebook and Twitter" width="330px" height="340px" />
```

`facebookProfile` and `twitterProfile` props are the facebook and twitter profile ids
`header` prop is the title of the section
`width` and `height` props are the customizable dimensions of the feed
