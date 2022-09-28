import React from "react"

import { MidSectionFour } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/MidSectionFour",
  component: MidSectionFour,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
    imageOne: { control: "text" },
    imageTwo: { control: "text" },
  },
}

export const midsectionfour = args => <MidSectionFour {...args} />

midsectionfour.args = {
  subText: "TAKE A LOOK AT OUR",
  mainText: "Buy and Sell Bitcoin",
  imageOne:
    "https://user-images.githubusercontent.com/64387054/191067556-98d44214-0733-4de1-b463-e12f56c486c2.png",
  imageTwo:
    "https://user-images.githubusercontent.com/64387054/191067547-a08ab998-172b-495b-8feb-26a87b23dddc.png",
  description:
    "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Curabitur ultricies pellentesque mauris a elementum. Cras eu ornare turpis. ",
  buttonText: "Read more",
  buttonLink: "#",
}
