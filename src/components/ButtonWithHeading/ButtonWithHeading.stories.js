import React from 'react';

import { ButtonWithHeading } from './index';

import { action } from "@storybook/addon-actions";

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'ButtonWithHeading',
  component: ButtonWithHeading,
  argTypes: {
    heading: { control: 'text' },
    buttonText: { control: 'text' },
    buttonWidth: { control: 'text' },
    color: { control: 'text' }
  }
};

export const buttonwithheading = (args) => <ButtonWithHeading {...args} onClick={action("Button Clicked")} />

buttonwithheading.args = {
  heading: "Button Component",
  buttonText: "Button",
  buttonWidth: "400px",
  color: ""
}