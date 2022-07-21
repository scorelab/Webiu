import React from "react"

import { FooterLarge } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/FooterLarge",
  component: FooterLarge,
  argTypes: {
    headingOne: { control: "text" },
    headingTwo: { control: "text" },
    headingThree: { control: "text" },
    headingFour: { control: "text" },
    aboutText: { control: "text" },
    newsletterText: { control: "text" },
    linksListData: { control: "object" },
    contactListData: { control: "object" },
    socialLinks: { control: "object" },
  },
}

export const footerlarge = args => <FooterLarge {...args} />

footerlarge.args = {
  headingOne: "About Us",
  aboutText:
    "Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open",
  newsletterText:
    "Don’t miss to subscribe to our new feeds, kindly fill theform below.",
  headingTwo: "Contact Info",
  headingThree: "Important Links",
  headingFour: "Newsletter",
  linksListData: [
    { linkName: "Home", linkUrl: "#" },
    { linkName: "Features", linkUrl: "#" },
    { linkName: "Pricing", linkUrl: "#" },
    { linkName: "Blogs", linkUrl: "#" },
    { linkName: "Github", linkUrl: "#" },
  ],
  contactListData: [
    {
      detail: "Address: Your address goes here, your demo address.",
      link: "#",
    },
    { detail: "Phone: +1235636378", link: "#" },
    { detail: "Email : info@SCoReLab.org", link: "#" },
  ],
  socialLinks: {
    facebook: "#",
    gitter: "#",
    twitter: "#",
    github: "#",
    linkedin: "#",
    medium: "#",
  },
}
