import React from "react"
import {NavBar} from "./index"
import "./style.sass";

export default {
  title: "NavBar",
  component: NavBar,
}

const logo = "https://scorelab.org/logos/main-logo.jpeg";

export const navbar = () => (
  <NavBar
     logo={logo}
     links={[
       {
         isExternal: false,
         path: "https://scorelab.org/",
         name: "Home",
         isSpecial: false
     },
     {
       isExternal: false,
       path: "https://www.google.com/",
       name: "Projects",
       isSpecial: false
     },
     ]}
     logoStyle={{}}
  />
)
