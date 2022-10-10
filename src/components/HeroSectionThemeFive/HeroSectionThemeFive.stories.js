import React from "react"

import { HeroSectionThemeFive } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 5/HeroSectionThemeFive",
  component: HeroSectionThemeFive,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    SubData: { control: "object" },
  },
}

export const herosectionthemefive = args => <HeroSectionThemeFive {...args} />

herosectionthemefive.args = {
  image : "https://user-images.githubusercontent.com/64387054/194717344-dd44d316-245f-4d01-bd44-848d720a2700.png",
  mainText: "SCoRe lab Conference",
  description:
    " Mountain Resort, Phoenix, USA",
  contributeText: "START BUILDING",
  contributeLink: "#",
}
