import React from "react"

import AnimatedLogin from "."

export default {
  title: "InventoryManagementSystem/AnimatedLogin",
  component: AnimatedLogin,
  argTypes: {
    name: { control: "text" },
    typeWriteWords: { control: "array" },
    typeWriterHeader: { control: "text" },
    submitHandler: { control: "function" },
  },
}

export const animatedLogin = args => <AnimatedLogin {...args} />

animatedLogin.args = {
  name: "SCoRe Labs",
  typeWriteWords: ["Effective", "Simple", "Elegant"],
  typeWriterHeader: "SCoRe Lab is",
  submitHandler: () => {},
}
