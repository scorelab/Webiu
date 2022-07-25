import React from "react"

import { InfoComponent } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/InfoComponent",
  component: InfoComponent,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    image: { control: "text" },
    SubData: { control: "object" },
  },
}

export const infocomponent = args => <InfoComponent {...args} />

infocomponent.args = {
  mainText: "Easy to Use Mobile Applications",
  subText:
    "There earth face earth behold. She'd stars made void two given do and also. Our own grass days. Greater male Shall There faced earth behold She star",
  image:
    "https://user-images.githubusercontent.com/64387054/176352838-8c79d7df-69dc-4fc9-a1ac-e65d26b8e74f.png",
  SubData: [
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "Add New Project",
      subDataPara:
        "There earth face earth behold. She stars made void two given and also our own grass days. Greater",
    },
    {
      subImage:
        "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
      subDataHeading: "Add New Project",
      subDataPara:
        "There earth face earth behold. She stars made void two given and also our own grass days. Greater",
    },
  ],
}
