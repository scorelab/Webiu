## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the FooterLarge Component

This is a reusable component for the footer of a website. This Component is highly reusable and customizable via props, it consists of different section like short note about the site, newsletter, important links, contact info and social links as well.

## How to use the component

Import the component to `pages/index.js`
`import {FooterLarge} from "../components/FooterLarge";`

## How to handle props to the component

```
<FooterLarge
    headingOne = "sample-headingOne"
    headingTwo = "sample-headingTwo"
    headingThree = "sample-headingThree"
    headingFour = "sample-headingFour"
    aboutText = "sample-about-text"
    newsletterText = "sample-newsletter-text"
    linksListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    contactListData ={[Detail:"sample-address", link: "sample-address-link"],[Detail:"sample-phone-number", link: "sample-phone-link"]}
    socialLinks = {{facebook: "your_link", gitter: "your_link", twitter: "your_link", github: "your_link" linkedin:"your_link", medium:"your_link"}}
/>
```

`headingOne` this prop is use to add the heading of the first section
`headingTwo` this prop is use to add the heading of the second section
`headingThree` this prop is use to add the heading of the third section
`headingFour` this prop is use to add the heading of the second section
`aboutText` this prop is use to add the short-note/description about the site
`newsletterText` this prop is use to add the short-note/description about the newsletter subscription of the site
`linksListData` this prop is use to add deails and links to the important links secction of the site for the navihations
`contactListData` this prop is use to add details and links to the important links section of the site for the navigation
`socialLinks` this prop is use to add the link the social handle of the org
