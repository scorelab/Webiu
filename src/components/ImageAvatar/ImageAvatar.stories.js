import React from 'react';

import { ImageAvatar } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'ImagaAvatar',
  component: ImageAvatar,
  argTypes: {
     image: {control: 'text'}
  }
};

export const imageavatar = (args) => <ImageAvatar {...args} />

imageavatar.args = {
   image: "https://yashvardhanportfolio.netlify.app/static/media/yash%20(2).ca34b90c.jpg"
}