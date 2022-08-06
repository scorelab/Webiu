import React from "react"

import SearchBar from "."

import { action } from "@storybook/addon-actions"

export default {
  title: "LearningManagementSystem/SearchBarComponent",
  component: SearchBar,
  argTypes: {
    handleSearch: { control: "function" },
    placeHolder: { control: "text" },
  },
}

export const searchBarComponent = args => (
  <SearchBar {...args} handleSearch={action("function called")} />
)

searchBarComponent.args = {
  placeHolder: "Search Items.....",
}
