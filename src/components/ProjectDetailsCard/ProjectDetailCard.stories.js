import React from "react"

import { ProjectDetailCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/ProjectDetailCard",
  component: ProjectDetailCard,
  argTypes: {
    image: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
  },
}

export const projectdetailcard = args => <ProjectDetailCard {...args} />

projectdetailcard.args = {
  image: "https://user-images.githubusercontent.com/64387054/188652424-74360624-314c-4554-87bf-38799bda13e6.png",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
  buttonText: "Explore",
  buttonLink: "#",
}
