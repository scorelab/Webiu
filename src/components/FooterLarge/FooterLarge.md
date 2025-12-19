## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the FooterLarge Component

This is a reusable component for the footer of a website. This Component is highly reusable and customizable via props, it consists of different section like short note about the site, newsletter, important links, contact info and social links as well.

## How to use the component

Import the component to `pages/index.js`
`import {FooterLarge} from "../components/FooterLarge";`

## How to handle props to the component
## How to handle props to the component

```jsx
<FooterLarge
  headingOne="sample-headingOne"
  headingTwo="sample-headingTwo"
  headingThree="sample-headingThree"
  headingFour="sample-headingFour"
  aboutText="sample-about-text"
  newsletterText="sample-newsletter-text"
  linksListData={[
    { linkName: "link-name-1", linkUrl: "/link-1" },
    { linkName: "link-name-2", linkUrl: "/link-2" },
  ]}
  contactListData={[
    { detail: "sample-address", link: "/address-link" },
    { detail: "sample-phone-number", link: "/phone-link" },
  ]}
  socialLinks={{
    facebook: "your-link",
    gitter: "your-link",
    twitter: "your-link",
    github: "your-link",
    linkedin: "your-link",
    medium: "your-link",
  }}
/>


`headingOne` this prop is use to add the heading of the first section
`headingTwo` this prop is use to add the heading of the second section
`headingThree` this prop is use to add the heading of the third section
`headingFour` this prop is use to add the heading of the second section
`aboutText` this prop is use to add the short-note/description about the site
`newsletterText` this prop is use to add the short-note/description about the newsletter subscription of the site
`linksListData` this prop is use to add deails and links to the important links secction of the site for the navihations
`contactListData` this prop is use to add details and links to the important links section of the site for the navigation
`socialLinks` this prop is use to add the link the social handle of the org
