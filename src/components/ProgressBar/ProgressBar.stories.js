import React from 'react';

import { ProgressBar } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/ProgressBar',
  component: ProgressBar,
  argTypes: {
     data: {control: 'array'},
     colWidth: {control: 'text'},
     colHeight: {control: 'number'}
  }
};

export const progressbar = (args) => <ProgressBar {...args} />

progressbar.args = {
   data: [{bgcolor: "#51ad28", completed: 80, text: "EXAMPLE 1"}, 
          {bgcolor: "#E33F3F", completed: 60, text: "EXAMPLE 2"}, 
          {bgcolor: "#24598B", completed: 90, text: "EXAMPLE 3"}],
   colHeight: 25,
   colWidth: "300px"
}