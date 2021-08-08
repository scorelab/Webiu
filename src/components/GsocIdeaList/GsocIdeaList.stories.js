import React from 'react';

import { GsocIdeaList } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'opportunity/GsocIdeaList',
  component: GsocIdeaList,
  argTypes: {
     heading: {control: 'text'},
     description: {control: 'text'},
     defaultActiveKeys: {control: 'array'},
     listItems: {control: 'array'},
     previousProjects: {control: 'array'}
  }
};

export const gsocidealist = (args) => <GsocIdeaList {...args} />

gsocidealist.args = {
   heading: "GSoC Idea List",
   defaultActiveKeys: ['0'],
   description: "Lorem ipsum sample description fot the idea list of the organization for google summer of code participation",
   listItems: [{title: "sample", description: "sample", expectedresults: "sample", possiblementors: "sample", requiredknowledge: "sample", githuburl: "sample"},
               {title: "sample", description: "sample", expectedresults: "sample", possiblementors: "sample", requiredknowledge: "sample", githuburl: "sample"}],
   previousProjects: [{year: "2020", link: "#"},
                      {year: "2019", link: "#"},
                      {year: "2018", link: "#"},
                      {year: "2017", link: "#"}]
}