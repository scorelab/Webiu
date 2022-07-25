import React from "react"

import { Collaborations } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/Collaborations",
  component: Collaborations,
  argTypes: {
    data: { control: "array" },
    title: { control: "text" },
    description: { control: "text" },
    column: { control: "number" },
  },
}

export const collaborations = args => <Collaborations {...args} />

collaborations.args = {
  title: "Who do we work with ?",
  description: "Proud Collaborators and Industry Partners",
  column: 3,
  data: [
    {
      img:
        "https://user-images.githubusercontent.com/64387054/180157895-01e658f8-57e9-403c-9725-25a448c5f92b.png",
      text: "Brand 1",
    },
    {
      img:
        "https://user-images.githubusercontent.com/64387054/180157879-55ed9b26-f7cf-4951-9670-4f99b7521322.png",
      text: "Brand 2",
    },
    {
      img:
        "https://user-images.githubusercontent.com/64387054/180157857-a4e6126c-6662-4ff7-8754-0319b92c0cfc.png",
      text: "Brand 3",
    },
    {
      img:
        "https://user-images.githubusercontent.com/64387054/180157895-01e658f8-57e9-403c-9725-25a448c5f92b.png",
      text: "Brand 4",
    },
  ],
}
