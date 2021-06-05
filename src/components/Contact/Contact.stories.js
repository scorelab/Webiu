import React from "react"
import Contact from "./index"
import './style.sass';

export default {
  title: " Contact",
  component: Contact,
  argTypes: {
    contactMessage: { control: 'text' },
    subscribeMessage: { control: 'text' },
  }
}
export const contact = (args) => < Contact {...args} />;
contact.args = {
  contactMessage:"contactMessage",
  subscribeMessage:"subscribeMessage"
}
