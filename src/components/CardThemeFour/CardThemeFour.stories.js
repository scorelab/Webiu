import React from "react"

import { CardThemeFour } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/CardThemeFour",
  component: CardThemeFour,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
}

export const cardthemefour = args => <CardThemeFour {...args} />

cardthemefour.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
  title: "Exchange Fiat for Crypto",
  description:
    "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
}
