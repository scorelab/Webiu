import React from "react"

import { CtaCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/CtaCard",
  component: CtaCard,
  argTypes: {
    image: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
  },
}

export const ctacard = args => <CtaCard {...args} />

ctacard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/185166592-b3cf76be-b521-4642-a8ab-f4baadac7168.png",
  description: "Say Us Hi on Gitter",
  buttonText: "Join Gitter",
  buttonLink: "#",
}
