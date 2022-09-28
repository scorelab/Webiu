import React from "react"

import { PopularProjectsCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/PopularProjectsCard",
  component: PopularProjectsCard,
  argTypes: {
    image: { control: "text" },
    description: { control: "text" },
    buttonLink: { control: "text" },
    buttonText: { contrl: "text" },
  },
}

export const popularprojectscard = args => <PopularProjectsCard {...args} />

popularprojectscard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/192805385-3b38df69-5343-404e-911d-c749cd390823.png",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
  buttonLink: "#",
  buttonText: "Know More",
}
