import React from "react"

import { GradientBanner } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/GradientBanner",
  component: GradientBanner,
  argTypes: {
    bannerImage: { control: "text" },
    mainHeading: { control: "text" },
    tagLine: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
  },
}

export const gradientbanner = args => <GradientBanner {...args} />

gradientbanner.args = {
  bannerImage:
    "https://user-images.githubusercontent.com/64387054/182793922-5d1d50b8-7e04-4c97-b2fa-40576f7d257f.png",
  mainHeading: "Ready to build?",
  tagLine: "Choose a project. Start building with friends",
  buttonText: "Explore Projects",
  buttonLink: "#",
}
