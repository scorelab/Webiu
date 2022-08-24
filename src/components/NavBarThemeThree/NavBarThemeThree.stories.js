import React from "react"

import { NavBarThemeThree } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/NavBarThemeThree",
  component: NavBarThemeThree,
  argTypes: {
    logo: { control: "text" },
    links: { control: "array" },
    logoStyle: { control: "object" },
    ButtonLink: { control: "text" },
    ButtonText: { control: "text" },
  },
}

export const navbarthemethree = args => <NavBarThemeThree {...args} />

navbarthemethree.args = {
  logo:
    "https://user-images.githubusercontent.com/64387054/183563969-a96069fc-3d2c-4fe2-ae99-f9f910994ac5.png",
  links: [
    { path: "#", isActive: true, name: "Home" },
    { path: "#", isActive: false, name: "Projects" },
    { path: "#", isActive: false, name: "Community" },
    { path: "#", isActive: false, name: "Developers" },
  ],
  ButtonLink: "#",
  ButtonText: "Get Started",
}
