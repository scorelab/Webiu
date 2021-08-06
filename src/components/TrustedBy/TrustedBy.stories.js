import React from 'react';

import { TrustedBy } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/TrustedBy',
  component: TrustedBy,
  argTypes: {
     data: {control: 'array'},
     title: {control: 'text'},
     description: {control: 'text'},
     column: {control: 'number'}
  }
};

export const trustedby = (args) => <TrustedBy {...args} />

trustedby.args = {
   title: "Our Collaborations",
   description: "Proud Collaborators and Industry Partners",
   column: 2,
   data: [{img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/kotton.jpg", text: "Kotton"},
          {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/edge.jpg", text: "Edge"},
          {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/version2.jpg", text: "Version 2.0"},
          {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/noon.jpg", text: "Neon"},
          {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/jcnichols.jpg", text: "Nichollas"},
          {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/pet-wise.jpg", text: "Petwise"}]
}