import React from 'react';

import { Testimonial } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Testimonial',
  component: Testimonial,
  argTypes: {
     data: {control: 'array'},
     header: {control: 'text'}
  }
};

export const testimonial = (args) => <Testimonial {...args} />

testimonial.args = {
   header: "Testimonials",
   data: [{name: "Yash", image: "https://desklib.com/static/src/assets/images/v2/profile_1.svg", 
           description: "What does Lorem Ipsum mean? Derived from Latin dolorem ipsum, Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements. Any sample text or so", 
           rating: "5"},
          {name: "Harshita", image: "https://desklib.com/static/src/assets/images/v2/profile_2.svg", 
           description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue", 
           rating: "4"}]
}