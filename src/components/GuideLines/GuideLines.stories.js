import React from 'react';

import { GuideLines } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'GuideLines',
  component: GuideLines,
  argTypes: {
     heading: {control: 'text'},
     description: {control: 'text'},
     guidelines: {control: 'array'},
     image: {control: 'text'}
  }
};

export const guidelines = (args) => <GuideLines {...args} />

guidelines.args = {
   heading: "Guidelines", 
   description: "These are some important guidelines",
   guidelines: ["Introduce yourself to the community", "Look for issues and open with permission", "Resolve the issues and open PR"]
}