import React from 'react';

import { LetterAvatar } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'LetterAvatar',
  component: LetterAvatar,
  argTypes: {
     name: {control: 'text'},
     bgColor: {control: 'text'}
  }
};

export const letteravatar = (args) => <LetterAvatar {...args} />

letteravatar.args = {
   name: "SCoRe Lab",
   bgColor: "green"
}