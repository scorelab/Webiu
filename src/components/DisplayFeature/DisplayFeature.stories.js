import React from "react"

import { DisplayFeature } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/DisplayFeature",
  component: DisplayFeature,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    SubData: { control: "object" },
  },
}

export const displayfeature = args => <DisplayFeature {...args} />

displayfeature.args = {
  mainText: "Things We Do As SCoRe Lab.",
  subText: "And appear great open bearing evening dominion vodi.",
  description:
    "Subdue creature does face signs evening good sixth foreign gaered one. Fruit. Third every fruitful multiply subdue creature doesn't face signs evening good sixth you're.",
  image:
    "https://user-images.githubusercontent.com/64387054/177084627-45e2f11d-4d78-493d-8c8b-cd3e9ae96455.png",
  SubData: [
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "Cloud Compatibility",
      subDataPara:
        "There earth face earth behold. She stars made void two given and also our own grass days.",
    },
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "On Time Delivery",
      subDataPara:
        "There earth face earth behold. She stars made void two given and also our own grass days.",
    },
  ],
}
