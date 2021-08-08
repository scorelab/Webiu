import React from 'react';

import { Partner } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Partner',
  component: Partner,
  argTypes: {
     header: {control: 'text'},
     mainText: {control: 'text'},
     subText: {control: 'text'},
     buttonText: {control: 'text'},
     buttonLink: {control: 'text'},
     image: {control: 'text'},
     backgroundColor: {control: 'text'},
     contactLink: {control: 'text'},
     contactText: {control: 'text'}
  }
};

export const partner = (args) => <Partner {...args} />

partner.args = {
   header: "Partner With Us",
   mainText: "Collaborate with us",
   contactText: "Contact us",
   contactLink: "#",
   buttonText: "Form",
   buttonLink: "#",
   image: "https://scorelab.org/images/joinTeam.png",
   subText: "The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools."
}