import React from "react"

import SignUpWithSideImage from "."

import { action } from "@storybook/addon-actions"

export default {
  title: "HotelManagementSystem/SignUpWithSideImage",
  component: SignUpWithSideImage,
  argTypes: {
    imgUrl: { control: "text" },
    signInUrl: { control: "text" },
    signUpHandler: { control: "function" },
  },
}

export const signUpWithSideImage = args => (
  <SignUpWithSideImage
    {...args}
    signUpHandler={action("signup function called")}
  />
)

signUpWithSideImage.args = {
  imgUrl:
    "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE2MjEzMzgx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  signInUrl: "/login",
  signUpHandler: () => {},
}
