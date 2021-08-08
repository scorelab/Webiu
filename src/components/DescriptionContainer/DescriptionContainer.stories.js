import React from 'react';

import { DescriptionContainer } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/DescriptionContainer',
  component: DescriptionContainer,
  argTypes: {
    title: {control: 'text'},
    subTitle: {control: 'text'},
    image: {control: 'text'},
    mainText: {control: 'text'},
    sideComponent: {control: 'object'}
  }
};

export const descriptioncontainer = (args) => <DescriptionContainer {...args} />

descriptioncontainer.args = {
   title: "Description Container", 
   subTitle: "This component can be used to declare description regarding of a particular instance",
   image: "https://scorelab.org/images/community.png",
   mainText: "Your main text here",
   sideComponent: {content: "content of side component"}
}