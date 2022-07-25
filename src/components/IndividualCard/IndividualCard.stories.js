import React from "react"

import { IndividualCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/IndividualCard",
  component: IndividualCard,
  argTypes: {
    image: { control: "text" },
    iconImage: {confirm:"text"},
    title: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
  },
}

export const individualcard = args => <IndividualCard {...args} />

individualcard.args = {
  image: "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
  iconImage:"https://user-images.githubusercontent.com/64387054/177733357-c5e7d575-d243-41f0-88bb-920fcabc853e.png",
  title: "Unique Design",
  description:
    "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
  buttonText: "Read More",
  buttonLink: "#",
}
