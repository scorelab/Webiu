import React from 'react';

import { MediumFeed } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/MediumFeed',
  component: MediumFeed,
  argTypes: {
     title: {control: 'text'},
     mediumUrl: {control: 'text'},
     small: {control: 'boolean'},
     limit: {control: 'number'}
  }
};

export const mediumfeed = (args) => <MediumFeed {...args} />

mediumfeed.args = {
   title: "Recent Blogs",
   mediumUrl: "https://medium.com/feed/scorelab",
   small: false,
   limit: 6
}