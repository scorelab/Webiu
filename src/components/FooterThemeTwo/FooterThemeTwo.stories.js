import React from "react"

import { FooterThemeTwo } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/FooterThemeTwo",
  component: FooterThemeTwo,
  argTypes: {
    titleOne: { control: "text" },
    titleTwo: { control: "text" },
    titleThree: { control: "text" },
    aboutText: { control: "text" },
    linksListData: { control: "object" },
    contactListData: { control: "object" },
    servicesListData: { control: "object" },
    socialLinks: { control: "object" },
  },
}

export const footerthemetwo = args => <FooterThemeTwo {...args} />

footerthemetwo.args = {
  aboutText:
    "Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open",
  titleOne: "Navigation",
  titleTwo: "Services",
  titleThree: "Contact Us",
  linksListData: [
    { linkName: "Home", linkUrl: "#" },
    { linkName: "Features", linkUrl: "#" },
    { linkName: "Pricing", linkUrl: "#" },
    { linkName: "Blogs", linkUrl: "#" },
    { linkName: "Github", linkUrl: "#" },
  ],
  servicesListData: [
    {
      serviceName: "Application Modenization",
      link: "#",
    },
    {
      serviceName: "Cloud Enablement",
      link: "#",
    },
    {
      serviceName: "AI/ML and Data Science",
      link: "#",
    },
    {
      serviceName: "Web Development",
      link: "#",
    },
    {
      serviceName: "Data Annotation",
      link: "#",
    },
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
