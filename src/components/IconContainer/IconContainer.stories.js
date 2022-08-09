import React from "react"

import IconCard from "."
import { action } from "@storybook/addon-actions"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

export default {
  title: "LearningManagementSystem/IconCard",
  component: IconCard,
  argTypes: {
    subject: { control: "text" },
    name: { control: "text" },
    year: { control: "text" },
    participantsCount: { control: "text" },
    memberText: { control: "text" },
    moduleCount: { control: "text" },
    moduleText: { control: "text" },
    onClickHandler: { control: "function" },
  },
}

export const iconCard = args => (
  <IconCard
    {...args}
    iconName={faUsers}
    onClickHandler={action("function called")}
  />
)

iconCard.args = {
  iconName: { faUsers },
  subject: "Economics ::",
  name: "John Doe ::",
  year: "2022",
  participantsCount: "100",
  memberText: "Members",
  moduleCount: "8",
  moduleText: "Modules",
}
