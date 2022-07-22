import React from "react"

import { ServicesCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/ServicesCard",
  component: ServicesCard,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
}

export const servicescard = args => <ServicesCard {...args} />

servicescard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/179999948-7fc7bdba-5b34-421e-9c66-476bd0ee108b.png",
  title: "Product Engineering",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
}
