import React from 'react';

import { Spinners } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/Spinners',
  component: Spinners,
  argTypes: {
     spinner: {control: 'boolean'},
     animation: {control: 'text'},
     variant: {control: 'text'},
     size: {control: 'text'},
     image: {control: 'text'},
     icon: {control: 'boolean'}
  }
};

export const spinners = (args) => <Spinners {...args} />

spinners.args = {
   animation: "border", 
   variant: "success",
   size: "md",
   icon: true,
   spinner: true,
   image: "https://scorelab.org/logos/main-logo.jpeg"
}