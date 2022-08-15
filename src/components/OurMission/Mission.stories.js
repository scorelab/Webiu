import React from "react"

import { Mission } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/Mission",
  component: Mission,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    declaration: { control: "text" },
    image: { control: "text" },
  },
}

export const mission = args => <Mission {...args} />

mission.args = {
  mainText:
    "Our Philosophy",
  subText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam adipiscing elit, sed do eiusmod tempor incididunt ut ",
  declaration: "Lorem Ips, CEO",
  image:
    "https://user-images.githubusercontent.com/64387054/180654878-f415685c-a5ae-4df3-be47-a1689d250aa0.png",
}
