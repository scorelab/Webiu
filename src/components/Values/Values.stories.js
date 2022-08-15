import React from "react"

import { Values } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/Values",
  component: Values,
  argTypes: {
    title: { control: "text" },
    data : {control: "object"},
    image: { control: "text" },
  },
}

export const values = args => <Values {...args} />

values.args = {
  title: "Our Core Values",
  data: [
    {list : "Starts the automated process."},
    {list : "Starts the automated process."},
    {list : "Starts the automated process."},
    {list : "Starts the automated process."},
  ],
  image:
    "https://user-images.githubusercontent.com/64387054/180699054-37ba8ebf-2ac1-4da0-8df9-0aa4e4917b59.png",
}
