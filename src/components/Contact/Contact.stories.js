import React from "react"
import {Contact} from "./index"
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: "Contact",
  component: Contact,
}

export const contact = () => (
  <Contact
    contactMessage="ContactMessage"
    subscribeMessage="SubscribeMessage"
  />
)
