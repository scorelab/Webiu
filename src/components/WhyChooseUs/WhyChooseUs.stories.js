import React from "react"

import { WhyChooseUs } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/WhyChooseUs",
  component: WhyChooseUs,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
  },
}

export const whychooseus = args => <WhyChooseUs {...args} />

whychooseus.args = {
  mainText: "Why Choose Us ?",
  subText: "And appear great open bearing evening dominion vodi.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  image:
    "https://user-images.githubusercontent.com/64387054/180863730-2e0bb6c2-14fd-42c7-9104-07d81d3db969.png",
}
