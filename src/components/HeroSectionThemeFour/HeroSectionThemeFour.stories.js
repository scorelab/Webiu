import React from "react"

import { HeroSectionThemeFour } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/HeroSectionThemeFour",
  component: HeroSectionThemeFour,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
    image: { control: "text" },
  },
}

export const herosectionthemefour = args => <HeroSectionThemeFour {...args} />

herosectionthemefour.args = {
  mainText: "A new World is comming",
  subText:
    "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem.",
  buttonText: "Read More",
  buttonLink: "#",
  image: "https://user-images.githubusercontent.com/64387054/187383085-64e30c99-1389-461f-85a1-b28452285d16.png",
}
