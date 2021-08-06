import React from 'react';

import { Typewriter } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Typewriter',
  component: Typewriter,
  argTypes: {
     words: {control: 'array'},
     header: {control: 'text'},
     wait: {control: 'number'},
     color: {control: 'text'},
     staticText: {control: 'text'}
  }
};

export const typewriter = (args) => <Typewriter {...args} />

typewriter.args = {
   words: ["DEVELOPER", "PROGRAMMER", "DEBUGGER"],
   header: "Typewriter",
   wait: 100,
   staticText: "I AM A"
}