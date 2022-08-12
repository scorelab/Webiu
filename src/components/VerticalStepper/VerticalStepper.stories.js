import React from "react"

import VerticalStepper from "."

import { action } from "@storybook/addon-actions"

export default {
  title: "LearningManagementSystem/VerticalStepper",
  component: VerticalStepper,
  argTypes: {
    activeStep: { control: "number" },
    stepsList: { control: "array" },
    onClickStepHandler: { control: "function" },
  },
}

export const verticalStepper = args => (
  <VerticalStepper {...args} onClickStepHandler={action("function called")} />
)

verticalStepper.args = {
  activeStep: 1,
  stepsList: [{ name: "Step 1" }, { name: "Step 2" }, { name: "Step 3" }],
}
