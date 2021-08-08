import React from 'react';

import { Statistics } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Statistics',
  component: Statistics,
  argTypes: {
     header: {control: 'text'},
     title: {control: 'text'},
     description: {control: 'text'},
     data: {control: 'array'},
     image: {control: 'text'}
  }
};

export const statistics = (args) => <Statistics {...args} />

statistics.args = {
   header: "Statistics",
   title: "Number At a Glance",
   description: "The Journey of SCoRe Lab has been incredible!",
   image: "https://scorelab.org/images/community.png",
   data: [{name: "Users", stat: "10K"}, {name: "Repository", stat: "30+"}, {name: "Members", stat: "1K+"}, 
          {name: "Admin", stat: "30+"}, {name: "Projects", stat: "40+"}, {name: "Users", stat: "10K"}]
}