import React from "react"

import { DetailCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/DetailCard",
  component: DetailCard,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
}

export const detailcard = args => <DetailCard {...args} />

detailcard.args = {
  title: "Product Engineering",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
}
