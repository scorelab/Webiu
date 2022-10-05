import React from "react"

import { AuthComponent } from "./index"

import "bootstrap/dist/css/bootstrap.css"
import { action } from "@storybook/addon-actions"

export default {
  title: "Theme 3/AuthComponent",
  component: AuthComponent,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    declaration: { control: "text" },
    image: { control: "text" },
    handleContactSubmit: { control: "function" },
  },
}

export const authcomponent = args => (
  <AuthComponent
    {...args}
    handleContactSubmit={action("contact submit")}
  />
)

authcomponent.args = {
  mainText: "Let's get you started!",
  image:
    "https://user-images.githubusercontent.com/64387054/193190814-21d2addb-53b0-48e0-bfe6-87f464cd2783.png",
}
