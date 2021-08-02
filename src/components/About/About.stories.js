import React from 'react';

import { About } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'About',
  component: About,
  argTypes: {
    header: { control: 'text' },
    mainText: { control: 'text' },
    subText: { control: 'text' },
    buttonText: { control: 'text' }, 
    buttonLink: { control: 'text' },
    image: { control: 'text' },
    backgroundColor: { control: 'text' }
  }
};

export const about = (args) => <About {...args} />

about.args = {
   header: "About Component",
   mainText: "Welcome To SCoRe Lab",
   subText: "The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools.",
   buttonText: "Explore",
   buttonLink: "/",
   image: "https://scorelab.org/images/community.png",
}