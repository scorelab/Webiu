import React from 'react';

import { Announcements } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Announcements',
  component: Announcements,
  argTypes: {
     data: {control: 'array'},
     speed: {control: 'text'},
     direction: {control: 'text'},
     horizontal: {control: 'boolean'},
     title: {control: 'text'},
     header: {control: 'text'}
  }
};

export const announcements = (args) => <Announcements {...args} />

announcements.args = {
   header: "Announcements",
   title: "Announcements",
   speed: "2",
   direction: "up",
   horizontal: false,
   data: [{text: "This is a sample notice", link: "#"}, {text: "This is another sample notice", link: "#"}]
}