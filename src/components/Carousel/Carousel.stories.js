import React from 'react';

import { Carousel } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Carousel',
  component: Carousel,
  argTypes: {
    header: {control: 'text'},
    data: {control: {
        title: {control: 'text'},
        content: {control: 'text'},
        image: {control: 'text'}
    }}
  }
};

export const carousel = (args) => <Carousel {...args} />

carousel.args = {
   header: "Carousel Component",
   data: [{title: "LabelLab", content: "Lorem ipsum sample data", 
            image: "https://scorelab.org/logos/projects/labellab.png"},
            {title: "Dronesym", content: "Lorem ipsum sample data", 
            image: "https://scorelab.org/logos/projects/dronesym.png"},
            {title: "Senz", content: "Lorem ipsum sample data", 
            image: "https://scorelab.org/logos/projects/senz.png"}]
}