import React from "react"

import { NavBarThemeFour } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/NavBarThemeFour",
  component: NavBarThemeFour,
  argTypes: {
    logo: { control: "text" },
    PhoneText: { control: "text" },
    links: { control: "array" },
    logoStyle: { control: "object" },
  },
}

export const navbarthemefour = args => <NavBarThemeFour {...args} />

navbarthemefour.args = {
  logo:
    "https://user-images.githubusercontent.com/64387054/177047873-3eed8ef1-3af0-4b4f-8bba-d2b2d82c1742.png",
  links: [
    { path: "#", isActive: true, name: "Home" },
    { path: "#", isActive: false, name: "About Us" },
    { path: "#", isActive: false, name: "Services" },
    { path: "#", isActive: false, name: "Contact" },
  ],
  PhoneText: "+ 91 987654321",
}
