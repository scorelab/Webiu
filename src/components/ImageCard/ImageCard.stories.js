import React from "react"

import ImageCard from "."

import { action } from "@storybook/addon-actions"

export default {
  title: "LearningManagementSystem/ImageCard",
  component: ImageCard,
  argTypes: {
    imageUrl: { control: "text" },
    moduleName: { control: "text" },
    height: { control: "text" },
    width: { control: "text" },
    imageHeight: { control: "text" },
    onClickHandler: { control: "function" },
  },
}

export const imageCard = args => (
  <ImageCard {...args} onClickHandler={action("function called")} />
)

imageCard.args = {
  imageUrl:
    "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwODg4MTk2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  moduleName: "What is Economics?",
  height: "300px",
  width: "300px",
  imageHeight: "180px",
}
