import React from "react"

import { ContactUs } from "./index"

import "bootstrap/dist/css/bootstrap.css"

import { action } from "@storybook/addon-actions"

export default {
  title: "Theme 2/ContactUs",
  component: ContactUs,
  argTypes: {
    contactTitle: { control: "text" },
    handleContactSubmit: { control: "function" },
  },
}

export const contactus = args => (
  <ContactUs {...args} handleContactSubmit={action("contact submit")} />
)

contactus.args = {
  contactTitle: "Get In Touch",
}
