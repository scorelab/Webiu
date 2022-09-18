import React from "react"

import { HeroSectionThemeThree } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/HeroSectionThemeThree",
  component: HeroSectionThemeThree,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    contributeLink: { control: "text" },
    contributeText: { control: "text" },
    buttonLink: { control: "text" },
    buttonText: { control: "text" },
  },
}

export const herosectionthemethree = args => <HeroSectionThemeThree {...args} />

herosectionthemethree.args = {
  mainText: "Welcome to the SCoRe community hub",
  subText: "Join the Community",
  description:
    "The SCoRe labcommunity is home to hundreds of thousands of developers.",
  image:
    "https://user-images.githubusercontent.com/64387054/185986126-d510822e-05b7-4e9c-a1d1-97bebf13061f.png",
  buttonText: "Read Documentation",
  buttonLink: "#",
  contributeText: "START BUILDING",
  contributeLink: "#",
}
