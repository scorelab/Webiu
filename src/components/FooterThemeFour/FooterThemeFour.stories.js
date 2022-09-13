import React from "react"

import { FooterThemeFour } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/FooterThemeFour",
  component: FooterThemeFour,
  argTypes: {
    aboutText: { control: "text" },
    subscribeText: { control: "text" },
    titleOne: { control: "text" },
    titleTwo: { control: "text" },
    socialLinks: { control: "object" },
    useFullListData: { control: "object" },
    copywriteText: { control: "text" },
  },
}

export const footerthemefour = args => <FooterThemeFour {...args} />

footerthemefour.args = {
  aboutText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  titleOne: "Useful Links",
  titleTwo: "Subscribe to Our Newsletter",
  socialLinks: {
    facebook: "#",
    gitter: "#",
    twitter: "#",
    github: "#",
    linkedin: "#",
    medium: "#",
  },
  useFullListData: [
    { linkName: "Home", linkUrl: "#" },
    { linkName: "About Us", linkUrl: "#" },
    { linkName: "Services", linkUrl: "#" },
    { linkName: "Blogs", linkUrl: "#" },
    { linkName: "Contact Us", linkUrl: "#" },
    { linkName: "Insurance", linkUrl: "#" },
    { linkName: "Planning", linkUrl: "#" },
    { linkName: "Crypto", linkUrl: "#" },
  ],
  subscribeText:
    "Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. ",
  copywriteText: "Copyright ©2022 All rights reserved by SCoRe Lab",
}
