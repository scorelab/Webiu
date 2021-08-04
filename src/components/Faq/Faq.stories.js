import React from 'react';

import { Faq } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/Faq',
  component: Faq,
  argTypes: {
     header: {control: 'text'},
     bgColor: {control: 'text'},
     toggleColor: {control: 'text'},
     titleColor: {control: 'text'},
     data: {control: {
         title: {control: 'text'},
         content: {control: 'text'}
     }}
  }
};

export const faq = (args) => <Faq {...args} />

faq.args = {
   header: "FAQ Component",
   data: [{title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
        content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
        {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
        content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
        {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
        content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
        {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
        content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
        {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
        content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"}]
}