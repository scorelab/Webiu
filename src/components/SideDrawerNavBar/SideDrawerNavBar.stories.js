import React, { useState } from "react"
import {
  faHome,
  faHamburger,
  faChevronDown,
  faChevronUp,
  faHotel,
  faStar,
} from "@fortawesome/free-solid-svg-icons"

import { action } from "@storybook/addon-actions"

import NavigationDrawer from "."

export default {
  title: "HotelManagementSystem/SideDrawerNavBar",
  component: NavigationDrawer,
  argTypes: {
    navigationOptions: { control: "array" },
    open: { control: "boolean" },
    resturentOptions: { control: "boolean" },
    hotelOptions: { control: "boolean" },
    handleDrawerOpen: { control: "function" },
    handleDrawerClose: { control: "function" },
    backIconHandler: { control: "function" },
    brandName: { control: "text" },
  },
}

export const navigationDrawer = args => (
  <NavigationDrawer
    {...args}
    handleDrawerOpen={action("set the state to open the drawer")}
    handleDrawerClose={action("set the state to close the drawer")}
    backIconHandler={action("set the state to show more navigations")}
  />
)

const resturentOptions = false
const hotelOptions = false

navigationDrawer.args = {
  resturentOptions: false,
  navigationOptions: [
    { id: "1", name: "Home", frontIcon: faHome, route: "/" },
    {
      id: "2",
      name: "Resturent",
      frontIcon: faHamburger,
      backIcon: resturentOptions ? faChevronUp : faChevronDown,
      other: [
        { id: "1", name: "Food & Beverages", route: "/foods" },
        { id: "2", name: "Special Offers", route: "/offers" },
        { id: "3", name: "Reserve Table", route: "/table" },
        { id: "4", name: "Reservation", route: "/reservation" },
      ],
    },
    {
      id: "3",
      name: "Hotel",
      frontIcon: faHotel,
      backIcon: hotelOptions ? faChevronUp : faChevronDown,
      other: [
        { id: "1", name: "Rooms", route: "/rooms" },
        { id: "2", name: "Book Now", route: "/booking" },
      ],
    },
    {
      id: "4",
      name: "Ratings & Reviews",
      frontIcon: faStar,
      route: "/ratings",
    },
  ],
  open: true,
  hotelOptions: false,
  brandName: "ScoreLab",
}
