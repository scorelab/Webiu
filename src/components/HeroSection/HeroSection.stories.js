import React from "react"

import { HeroSection } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/HeroSection",
  component: HeroSection,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
    image: { control: "text" },
  },
}

export const herosection = args => <HeroSection {...args} />

herosection.args = {
  mainText: "Welcome to SCoRe Lab Services",
  subText:
    "The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools.",
  buttonText: "Learn More",
  buttonLink: "#",
  image:
    "https://user-images.githubusercontent.com/64387054/176197482-11f04c2c-b9f0-410a-a9e1-941deb5f9bf2.svg",
}
