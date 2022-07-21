import React from "react"

import { NavBarThemeTwo } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/NavBarThemeTwo",
  component: NavBarThemeTwo,
  argTypes: {
    logo: { control: "text" },
    links: { control: "array" },
    logoStyle: { control: "object" },
    ButtonLink: { control: "text" },
    ButtonText: { control: "text" },
  },
}

export const navbarthemetwo = args => <NavBarThemeTwo {...args} />

navbarthemetwo.args = {
  logo:
    "https://user-images.githubusercontent.com/64387054/177047873-3eed8ef1-3af0-4b4f-8bba-d2b2d82c1742.png",
  links: [
    { path: "#", isActive: true, name: "Home" },
    { path: "#", isActive: false, name: "Services" },
    { path: "#", isActive: false, name: "Startups" },
    { path: "#", isActive: false, name: "About" },
    { path: "#", isActive: false, name: "Contact" },
  ],
  ButtonLink: "#",
  ButtonText: "Get a qoute",
}
