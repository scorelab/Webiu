import React from "react"

import { NavBarThemeOne } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/NavBarThemeOne",
  component: NavBarThemeOne,
  argTypes: {
    logo: { control: "text" },
    ButtonLink: { control: "text" },
    ButtonText: { control: "text" },
    links: { control: "array" },
    logoStyle: { control: "object" },
  },
}

export const navbarthemeone = args => <NavBarThemeOne {...args} />

navbarthemeone.args = {
  logo:
    "https://user-images.githubusercontent.com/64387054/177047873-3eed8ef1-3af0-4b4f-8bba-d2b2d82c1742.png",
  links: [
    { path: "#", isActive: true, name: "Home" },
    { path: "#", isActive: false, name: "Pricing" },
    { path: "#", isActive: false, name: "Features" },
    { path: "#", isActive: false, name: "Contact" },
  ],
  ButtonLink: "#",
  ButtonText: "Sign In",
}
