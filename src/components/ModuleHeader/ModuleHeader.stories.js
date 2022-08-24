import React from "react"

import ModuleHeader from "."

export default {
  title: "LearningManagementSystem/ModuleHeader",
  component: ModuleHeader,
  argTypes: {
    subject: { control: "text" },
    year: { control: "text" },
    name: { control: "text" },
    participatsCount: { control: "text" },
  },
}

export const moduleHeader = args => <ModuleHeader {...args} />

moduleHeader.args = {
  subject: "Mathematics",
  year: "2022A/L",
  name: "John Doe",
  participatsCount: "100",
}
