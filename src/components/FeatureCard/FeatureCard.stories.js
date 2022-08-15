import React from "react"

import { FeatureCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/FeatureCard",
  component: FeatureCard,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
}

export const featurecard = args => <FeatureCard {...args} />

featurecard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/180715106-b59c3caf-67d3-49f5-a015-27e22157d96e.png",
  title: "Web Development",
  description: "Score lab develops end to end AI models",
}
