import React from "react"

import { IndividualCardGrid } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/IndividualCardGrid",
  component: IndividualCardGrid,
  argTypes: {
    data: { control: "object" },
  },
}

export const individualcardgrid = args => <IndividualCardGrid {...args} />

individualcardgrid.args = {
  data: [
    {
      index: 0,
      imageOne:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      iconImageOne:
        "https://user-images.githubusercontent.com/64387054/177733357-c5e7d575-d243-41f0-88bb-920fcabc853e.png",
      titleOne: "Unique Design",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
      buttonTextOne: "Read More",
      buttonLinkOne: "#",
    },
    {
      index: 1,
      imageOne:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      iconImageOne:
        "https://user-images.githubusercontent.com/64387054/177733357-c5e7d575-d243-41f0-88bb-920fcabc853e.png",
      titleOne: "Unique Design",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
      buttonTextOne: "Read More",
      buttonLinkOne: "#",
    },
    {
      index : 2,
      imageOne:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      iconImageOne:
        "https://user-images.githubusercontent.com/64387054/177733357-c5e7d575-d243-41f0-88bb-920fcabc853e.png",
      titleOne: "Unique Design",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
      buttonTextOne: "Read More",
      buttonLinkOne: "#",
    },
  ],
}
