import React from "react"
import {NavBar} from "./index"
import "./style.sass";

const logo = "https://scorelab.org/logos/main-logo.jpeg";

const links = [{isExternal: false, path: "/", name: "Home",isSpecial: false},
               {isExternal: false, path: "/", name: "Projects",isSpecial: false},
               {isExternal: false, path: "/", name: "Publications",isSpecial: false},
               {isExternal: false, path: "/", name: "Team",isSpecial: false},
               {isExternal: false, path: "/", name: "Opportunties",isSpecial: false},
               {isExternal: true, path: "/", name: "GitHub",isSpecial: false},
               {isExternal: false, path: "/", name: "GSOC 2021",isSpecial: true}]

const logoStyle = {}

export default {
  title: "NavBar",
  component: NavBar,
  argTypes: {
    logo: { control: 'text' },
    links: { control: 'array' },
    logoStyle: { control: 'object' }
  }
}

export const navbar = (args) => (
  <NavBar {...args} />
)

navbar.args = {
  logo: logo,
  links: links,
  logoStyle: logoStyle
}
