import React from 'react';

import { Timeline } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Timeline',
  component: Timeline,
  argTypes: {
     header: {control: 'text'},
     data: {control: 'array'},
     height: {control: 'text'}
  }
};

export const timeline = (args) => <Timeline {...args} />

timeline.args = {
   header: "Timeline",
   height: "1200px",
   data: [{text: 'Choose the Organization', date: 'July 23 2021', category: {tag: 'GSoC', color:'black'}, link: {url: '#', text: 'Explore'}},
          {text: 'Set up project', date: 'July 24 2021', category: {tag: 'GSoC', color:'orange'}, link: {url: '#', text: 'Explore'}},
          {text: 'Open a Pull Request', date: 'July 25 2021', category: {tag: 'GSoC', color:'red'}, link: {url: '#', text: 'Explore'}},
          {text: 'Code gets merged', date: 'July 26 2021', category: {tag: 'GSoC', color:'green'}, link: {url: '#', text: 'Explore'}}]
}