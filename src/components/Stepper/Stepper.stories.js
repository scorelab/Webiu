import React from 'react';

import { Stepper } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Stepper',
  component: Stepper,
  argTypes: {
     steps: {control: 'array'},
     direction: {control: 'text'},
     currentStep: {control: 'number'}
  }
};

export const stepper = (args) => <Stepper {...args} />

stepper.args = {
   direction: "vertical",
   steps: ["Fork the Project", "Clone the Repo", "Local Setup", "Talk to Community", "Send PRs", "PRs get reviewed"],
   currentStep: 4
}