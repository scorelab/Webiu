import React from 'react';

import { Timestamp } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Timestamp',
  component: Timestamp,
  argTypes: {
     image: {control: 'text'},
     firstName: {control: 'text'},
     buttonText: {control: 'text'},
     buttonLink: {control: 'text'},
     message: {control: 'text'}
  }
};

export const timestamp = (args) => <Timestamp {...args} />

timestamp.args = {
   image: "https://scorelab.org/images/community.png",
   firstName: "SCoRe Lab",
   buttonText: "Home",
   buttonLink: "#",
   message: "What Can I Help You With Today?"
}