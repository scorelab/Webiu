## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Footer Component

This is a reusable component for the footer of a website. This Component is highly reusable and customizable via props, it consists of different section like short note about the site, services, important links, contact info and social links as well.

## How to use the component

Import the component to `pages/index.js`
`import {FooterThemeThree} from "../components/FooterThemeThree";`

## How to handle props to the component

```
<FooterThemeThree
    titleOne = "sample-headingOne"
    titleTwo = "sample-headingTwo"
    titleThree = "sample-headingThree"
    mainHeading = "sample-mainHeading"
    newsletterText = "sample-newsletter-text"
    linksListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    secondListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    thirdListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    fourthListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    socialLinks = {{facebook: "your_link", gitter: "your_link", twitter: "your_link", github: "your_link" linkedin:"your_link", medium:"your_link"}}
/>
```

`titleOne` this prop is use to add the heading of the first section
`titleTwo` this prop is use to add the heading of the second section
`titleThree` this prop is use to add the heading of the third section
`titleThree` this prop is use to add the heading of the fourth section
`mainHeading` this prop is use to add the mainheading/moto of the site
`firstListData` this prop is use to add deails and links to the important links section of the site for the first row
`secondListData` this prop is use to add deails and links to the important links section of the site for the first row
`thirdListData` this prop is use to add deails and links to the important links section of the site for the first row
`fourthListData` this prop is use to add deails and links to the important links section of the site for the first row
`socialLinks` this prop is use to add the link the social handle of the org
