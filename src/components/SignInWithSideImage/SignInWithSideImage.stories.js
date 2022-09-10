import React from "react"

import SignInWithSideImage from "."

import { action } from "@storybook/addon-actions"

export default {
  title: "HotelManagementSystem/SignInWithSideImage",
  component: SignInWithSideImage,
  argTypes: {
    imgUrl: { control: "text" },
    signUpUrl: { control: "text" },
    signInHandler: { control: "function" },
  },
}

export const signInWithSideImage = args => (
  <SignInWithSideImage
    {...args}
    signInHandler={action("signIn function called")}
  />
)

signInWithSideImage.args = {
  imgUrl:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjI3OTM5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  signUpUrl: "/signUp",
}
