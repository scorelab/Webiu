import React from "react"

import { NewsCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/NewsCard",
  component: NewsCard,
  argTypes: {
    image: { control: "text" },
    mainText: { control: "text" },
    description: { control: "text" },
    buttonLink: { control: "text" },
    buttonText: { control: "text" },
  },
}

export const newscard = args => <NewsCard {...args} />

newscard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/188314036-fd518513-1cc4-4a2e-b526-88fc96b1e594.png",
  mainText: "New Regulations on the Crypto Market",
  description:
    "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.",
  buttonLink: "#",
  buttonText: "Read More",
}
