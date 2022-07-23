import React from "react"

import { HeroSectionThemeTwo } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/HeroSectionThemeTwo",
  component: HeroSectionThemeTwo,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
    image: { control: "text" },
  },
}

export const Herosectionthemetwo = args => <HeroSectionThemeTwo {...args} />

Herosectionthemetwo.args = {
  mainText:
    "Score Lab Builds product for Startups, Enterprises and Small business",
  subText: "Get your MVP, MMP or prototype done at quality and",
  buttonText: "Find out How",
  buttonLink: "#",
  image:
    "https://user-images.githubusercontent.com/64387054/179802410-1e14c33b-1fdc-453f-9dab-ceecd024b428.png",
}
