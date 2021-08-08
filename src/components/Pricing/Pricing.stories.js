import React from 'react';

import { Pricing } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Pricing',
  component: Pricing,
  argTypes: {
     header: {control: 'text'},
     title: {control: 'text'},
     description: {control: 'text'},
     plans: {control: 'array'}
  }
};

export const pricing = (args) => <Pricing {...args} />

pricing.args = {
   header: "Pricing Component",
   title: "Subscription Charges",
   description: "sample slabs of charges of various instances",
   plans: [{plan: "BASIC", description: "sample", price: 30, 
            items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
            buttonText: "Explore", buttonLink: "#"},
           {plan: "ADVANCE", description: "sample", price: 40, 
            items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
            buttonText: "Explore", buttonLink: "#"},
           {plan: "PRO", description: "sample", price: 50, 
            items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
            buttonText: "Explore", buttonLink: "#"}]
}