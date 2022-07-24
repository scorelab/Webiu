## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Footer Component

This is a reusable component for the footer of a website. This Component is highly reusable and customizable via props, it consists of different section like short note about the site, services, important links, contact info and social links as well.

## How to use the component

Import the component to `pages/index.js`
`import {FooterThemeTwo} from "../components/FooterThemeTwo";`

## How to handle props to the component

```
<FooterThemeTwo
    titleOne = "sample-headingOne"
    titleTwo = "sample-headingTwo"
    titleThree = "sample-headingThree"
    aboutText = "sample-about-text"
    newsletterText = "sample-newsletter-text"
    linksListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    contactListData = {[Detail:"sample-address", link: "sample-address-link"],[Detail:"sample-phone-number", link: "sample-phone-link"]}
    servicesListData = {[serviceName : "sample service name", link: "sample-service-url"],[serviceName : "sample service name", link: "sample-service-url"]}
    socialLinks = {{facebook: "your_link", gitter: "your_link", twitter: "your_link", github: "your_link" linkedin:"your_link", medium:"your_link"}}
/>
```

`titleOne` this prop is use to add the heading of the first section
`titleTwo` this prop is use to add the heading of the second section
`titleThree` this prop is use to add the heading of the third section
`aboutText` this prop is use to add the short-note/description about the site
`newsletterText` this prop is use to add the short-note/description about the newsletter subscription of the site
`linksListData` this prop is use to add deails and links to the important links secction of the site for the navihations
`contactListData` this prop is use to add details and links to the important links section of the site for the navigation
`servicesListData` this prop is use to add the details about the services section of the site for the navigation
`socialLinks` this prop is use to add the link the social handle of the org
