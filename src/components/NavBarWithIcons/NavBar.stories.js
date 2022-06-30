import React from "react"
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

import NavBarWithIcons from "./index"

export default {
  title: "Home/NavBarWithIcons",
  component: NavBarWithIcons,
  argTypes: {
    firstName: { control: "text" },
    secondName: { control: "text" },
    categories: { control: "array" },
    iconList: { control: "array" },
  },
}

export const navbar = args => <NavBarWithIcons {...args} />

navbar.args = {
  firstName: "Dress",
  secondName: "Fit",
  categories: [
    {
      id: 1,
      route: "/",
      name: "Home",
    },
    {
      id: 2,
      route: "/women",
      name: "Women",
    },
    {
      id: 3,
      route: "/men",
      name: "Men",
    },
    {
      id: 4,
      route: "/kids",
      name: "Baby & Kids",
    },
    {
      id: 5,
      route: "/accessories",
      name: "Accessories",
    },
  ],
  iconList: [
    { icon: faSearch, link: "/search", alt: "search" },
    { icon: faShoppingCart, link: "/cart", alt: "cart" },
    { icon: faUser, link: "/user", alt: "user" },
  ],
}
