import React from "react"

import { NavBarThemeFive } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 5/NavBarThemeFive",
  component: NavBarThemeFive,
  argTypes: {
    logo: { control: "text" },
    links: { control: "array" },
    logoStyle: { control: "object" },
    buttonLink: { control: "text" },
    buttonLink: { contrl: "text" },
  },
}

export const navbarthemefive = args => <NavBarThemeFive {...args} />

navbarthemefive.args = {
  logo:
    "https://user-images.githubusercontent.com/64387054/177047873-3eed8ef1-3af0-4b4f-8bba-d2b2d82c1742.png",
  links: [
    { path: "#", isActive: true, name: "Home" },
    { path: "#", isActive: false, name: "About Us" },
    { path: "#", isActive: false, name: "Speakers" },
    { path: "#", isActive: false, name: "blog" },
    { path: "#", isActive: false, name: "Contact" },
  ],
  buttonLink: "#",
  buttonText: "Get Tickets",
}
