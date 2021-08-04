import React from 'react';

import { Card } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Card',
  component: Card,
  argTypes: {
     header: { control: 'text' },
     data: {control: {
         image: {control: 'text'},
         title: {control: 'text'},
         description: {control: 'text'}
     }},
     card: {control: true},
     services: {control: false},
     buttonText: {control: 'text'},
     buttonLink: {control: 'text'}
  }
};

export const card = (args) => <Card {...args} />

card.args = {
   header: "Card Component",
   card: true,
   services: false,
   data: [{image: "https://scorelab.org/logos/projects/dronesym.png", title: "Dronesym", 
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
            buttonText: "Explore", buttonLink: "https://google.com"},
            {image: "https://scorelab.org/logos/projects/parks.png", title: "Parks", 
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
            buttonText: "Explore", buttonLink: "/"},
            {image: "https://scorelab.org/logos/projects/bassa.png", title: "Bassa", 
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
            buttonText: "Explore", buttonLink: "/"}]
}