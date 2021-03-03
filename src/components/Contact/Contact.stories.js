import React from "react"
import {Contact} from "./index"
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: "Contact",
  component: Contact,
  argTypes: {
    contactMessage: { control: 'text' },
    subscribeMessage: { control: 'text' }
  }
}

export const contact = (args) => (
  <Contact
    {...args}
  />
)

contact.args = {
  contactMessage: "Message to be displayed",
  subscribeMessage: "Message to be displayed"
}
