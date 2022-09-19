import React from "react"

import { ContactUsThemeFour } from "./index"

import "bootstrap/dist/css/bootstrap.css"

import { action } from "@storybook/addon-actions"

export default {
  title: "Theme 4/ContactUsThemeFour",
  component: ContactUsThemeFour,
  argTypes: {
    subTextLeftCol : { control: "text" },
    mainTextLeftCol : { control: "text" },
    subHeadingLeftCol : { control: "text" },
    subTextRightCol : { control: "text" },
    mainTextRightCol : { control: "text" },
    contactListData: { control: "object" },
    handleContactSubmit: { control: "function" },
  },
}

export const contactusthemefour = args => (
  <ContactUsThemeFour
    {...args}
    handleContactSubmit={action("contact submit")}
  />
)

contactusthemefour.args = {
  subTextLeftCol : "Take a Look at our",
  mainTextLeftCol : "Contact info",
  subHeadingLeftCol : "Head Office",
  subTextRightCol : "Take a Look at our",
  mainTextRightCol : "Get In Touch",
  contactListData: [
    { detail: "Address: 1481 Creekside Lane Avila Beach, CA 93424" },
    { detail: "Phone: +53 345 7953 32453" },
    { detail: "Email: yourmail@gmail.com" },
  ],
}
