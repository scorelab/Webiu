import React from "react"
import ButtonWithHeading from "./index"
import { action } from "@storybook/addon-actions";
export default {
  title: "ButtonWithHeading",
  component: ButtonWithHeading,
  argTypes: {
    heading: { control: 'text' },
    buttonText: { control: 'text' },
  }
}
export const buttonwithheading = (args) => <ButtonWithHeading {...args} onClick={action("Button is clicked!")} />;
buttonwithheading.args = {
  heading: 'Button heading',
  buttonText: "Click here",
  
}