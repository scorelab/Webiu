import React from "react"

import { ServicesCardGrid } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/ServicesCardGrid",
  component: ServicesCardGrid,
  argTypes: {
    serviceHeading: { control: "text" },
    serviceDescription: { control: "text" },
    data: { control: "object" },
  },
}

export const servicescardgrid = args => <ServicesCardGrid {...args} />

servicescardgrid.args = {
  serviceHeading: "Services We Provide ",
  serviceDescription:
    "Our cored expertise lies in building products, across technology platforms, across domains.",
  data: [
    {
      imageOne:
        "https://user-images.githubusercontent.com/64387054/179999948-7fc7bdba-5b34-421e-9c66-476bd0ee108b.png",
      titleOne: "Product Engineering",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
    },
    {
      imageOne:
        "https://user-images.githubusercontent.com/64387054/180412924-0809d17b-1f0d-421f-afea-d60e6ae0c180.png",
      titleOne: "AI/ML",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
    },
    {
      imageOne:
        "https://user-images.githubusercontent.com/64387054/180412924-0809d17b-1f0d-421f-afea-d60e6ae0c180.png",
      titleOne: "IoT",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
    },
  ],
}
