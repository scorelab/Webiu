import React from "react"

import { ServiceItemCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/ServiceItemCard",
  component: ServiceItemCard,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    buttonLink: { control: "text" },
    buttonText: { control: "text" },
  },
}

export const serviceitemcard = args => <ServiceItemCard {...args} />

serviceitemcard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
  title: "Exchange Fiat for Crypto",
  description:
    "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
  buttonLink: "#",
  buttonText: "Read More",
}
