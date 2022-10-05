import React from "react"

import { ServiceSection } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/ServiceSection",
  component: ServiceSection,
  argTypes: {
    subText: { control: "text" },
    mainText: { control: "text" },
    dataUpperGrid: { control: "object" },
    dataLowerGrid: { control: "object" },
  },
}

export const servicesection = args => <ServiceSection {...args} />

servicesection.args = {
  subText: "Take a look at our",
  mainText: "Our Services",
  dataUpperGrid: [
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "We take care of you",
      subDataPara:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.",
    },
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "We take care of you",
      subDataPara:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.",
    },
  ],
  dataLowerGrid: [
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "We take care of you",
      subDataPara:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.",
    },
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "We take care of you",
      subDataPara:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.",
    },
  ],
}
