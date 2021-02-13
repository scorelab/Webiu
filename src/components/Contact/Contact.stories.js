import React from "react"
import Contact from "./index"

export default {
  title: "Contact",
  component: Contact,
}

export const contact = () => (
  <Contact
    contactMessage="contactMessage"
    subscribeMessage="subscribeMessage"
  />
)
