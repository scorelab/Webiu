import React from "react"

import { IntroComponent } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/IntroComponent",
  component: IntroComponent,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    description: {control: "text"},
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
    image: { control: "text" },
  },
}

export const introcomponent = args => <IntroComponent {...args} />

introcomponent.args = {
  subText: "TAKE A LOOK AT OUR",
  mainText: "Buy and Sell Bitcoin",
  image:
    "https://user-images.githubusercontent.com/64387054/188252633-c1268a68-cd0e-4f1e-a3a8-1212499c9528.png",
  description: "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. ",
  buttonText: "Read more",
  buttonLink: "#",
}
