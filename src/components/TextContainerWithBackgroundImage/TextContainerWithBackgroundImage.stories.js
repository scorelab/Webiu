import React from "react"

import TextContainerWithBackgroundImage from "."

export default {
  title: "HotelManagementSystem/TextContainerWithBackgroundImage",
  component: TextContainerWithBackgroundImage,
  argTypes: {
    firstHeader: { control: "text" },
    secondHeader: { control: "text" },
    height: { control: "text" },
  },
}

export const textContainerWithBackgroundImage = args => (
  <TextContainerWithBackgroundImage {...args} />
)

textContainerWithBackgroundImage.args = {
  firstHeader: "Cloud Hotel",
  secondHeader: "#1 Hotlel & Restaurent Management Application",
  height: "500px",
}
