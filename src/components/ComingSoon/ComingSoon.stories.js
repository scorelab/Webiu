import React from 'react';

import { ComingSoon } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/ComingSoon',
  component: ComingSoon,
  argTypes: {
     header: {control: 'text'},
     Image: {control: 'text'},
     buttonLink: {control: 'text'},
     buttonText: {control: 'text'},
     countdownText: {control: 'text'},
     deployDate: {control: 'text'},
     message: {control: 'text'}
  }
};

export const comingsoon = (args) => <ComingSoon {...args} />

comingsoon.args = {
   header: "Countdown Component",
   image: "https://scorelab.org/images/joinTeam.png",
   buttonLink: "/",
   buttonText: "Explore",
   countdownText: "Coming soon!",
   deployDate: "1 Jan, 2022 00:00:00",
   message: "The new version of this package is coming soon!"
}