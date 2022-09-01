import React from "react"

import UserDetail from "."

import { action } from "@storybook/addon-actions"

export default {
  title: "LearningManagementSystem/UserDetail",
  component: UserDetail,
  argTypes: {
    cancelHandler: { control: "function" },
    saveHandler: { control: "function" },
    logoutHandler: { control: "function" },
  },
}

export const userDetail = args => (
  <UserDetail
    {...args}
    cancelHandler={action("cancel btn clicked")}
    saveHandler={action("save btn clicked")}
    logoutHandler={action("logout btn clicked")}
  />
)
