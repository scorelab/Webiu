import React from "react"

import { InfoCompWithList } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/InfoCompWithList",
  component: InfoCompWithList,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
  },
}

export const infocompwithlist = args => <InfoCompWithList {...args} />

infocompwithlist.args = {
  mainText: "Things We Do As SCoRe Lab.",
  subText: "And appear great open bearing evening dominion vodi.",
  description:
    "Subdue creature does face signs evening good sixth foreign gaered one. Fruit. Third every fruitful multiply subdue creature doesn't face signs evening good sixth you're.",
  image:
    "https://user-images.githubusercontent.com/64387054/177028792-9f71c0e8-3a9e-4dad-8fc2-7153d4ededff.svg",
}
