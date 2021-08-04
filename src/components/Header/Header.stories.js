import React from 'react';

import { Header } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
     mainText: {control: 'text'},
     subText: {control: 'text'},
     icon: {control: 'text'},
     buttonText: {control: 'text'},
     buttonLink: {control: 'text'},
     image: {control: 'text'},
     small: {control: 'boolean'},
     backgroundColor: {control: 'text'}
  }
};

export const header = (args) => <Header {...args} />

header.args = {
   mainText: "WELCOME TO SCoRe LAB",
   subText: "The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools.",
   buttonText: "Explore",
   buttonLink: "/",
   small: false,
   image: "https://scorelab.org/images/community.png"
}