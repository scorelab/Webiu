import React from "react"

import { FooterThemeThree } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/FooterThemeThree",
  component: FooterThemeThree,
  argTypes: {
    mainHeading: {control: "text"},
    titleOne: { control: "text" },
    titleTwo: { control: "text" },
    titleThree: { control: "text" },
    titleFour: { control: "text" },
    aboutText: { control: "text" },
    firstListData: { control: "object" },
    secondListData: { control: "object" },
    thirdListData: { control: "object" },
    fourthListData: { control: "object" },
    socialLinks: { control: "object" },
  },
}

export const footerthemethree = args => <FooterThemeThree {...args} />

footerthemethree.args = {
  mainHeading: "Get more out of SCoRe Blockchain",
  titleOne: "BUILD",
  titleTwo: "APPLY",
  titleThree: "LEARN",
  titleFour: "OTHER",
  firstListData: [
    { linkName: "Docs", linkUrl: "#" },
    { linkName: "GitHub", linkUrl: "#" },
    { linkName: "Chat on Gitter", linkUrl: "#" },
    { linkName: "Status", linkUrl: "#" },
  ],
  secondListData: [
    { linkName: "Grants", linkUrl: "#" },
    { linkName: "Collective", linkUrl: "#" },
    { linkName: "Careers", linkUrl: "#" },
  ],
  thirdListData: [
    { linkName: "Blog", linkUrl: "#" },
    { linkName: "Podcast", linkUrl: "#" },
    { linkName: "Videos", linkUrl: "#" },
    { linkName: "Blogs", linkUrl: "#" },
  ],
  fourthListData: [
    { linkName: "Break blockchain", linkUrl: "#" },
    { linkName: "Disclaimer", linkUrl: "#" },
    { linkName: "Press & Brands", linkUrl: "#" },
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
