## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Footer Component

This is a reusable component for the footer of a website. This Component is highly reusable and customizable via props, it consists of different section like short note about the site, services, important links, contact info and social links as well.

## How to use the component

Import the component to `pages/index.js`
`import {FooterThemeFour} from "../components/FooterFour";`

## How to handle props to the component

```
<FooterThemeFour
    titleOne = "sample-headingOne"
    titleTwo = "sample-headingTwo"
    aboutText = "sample-about-text"
    newsletterText = "sample-newsletter-text"
    usefullListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    socialLinks = {{facebook: "your_link", gitter: "your_link", twitter: "your_link", github: "your_link" linkedin:"your_link", medium:"your_link"}}
    copywriteText = "sample-subscribe-text"
/>
```

`titleOne` this prop is use to add the heading of the first section
`titleTwo` this prop is use to add the heading of the second section
`aboutText` this prop is use to add the short-note/description about the site
`newsletterText` this prop is use to add the short-note/description about the newsletter subscription of the site
`socialLinks` this prop is use to add the link the social handle of the org
`copywriteText` this prop is use to add the link the copywriteText
