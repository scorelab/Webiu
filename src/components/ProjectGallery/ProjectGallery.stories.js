import React from "react"

import { ProjectGalleryCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/ProjectGalleryCard",
  component: ProjectGalleryCard,
  argTypes: {
    image: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
  },
}

export const projectgallerycard = (args) => <ProjectGalleryCard {...args} />

projectgallerycard.args = {
  image: "./photoGallery.png",
  description:
    "Selected Projects from the SCoRe lab Projects ,located around the world",
    button1Text: "Previous",
    button2Text: "Next",
    button1Link: "#",
    button2Link: "#"
}
