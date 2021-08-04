import React from 'react';

import { JobOpenings } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Opportunity/JobOpenings',
  component: JobOpenings,
  argTypes: {
     title: {control: 'text'},
     openings: {control: 'array'}
  }
};

export const jobopenings = (args) => <JobOpenings {...args} />

jobopenings.args = {
   title: "Current Openings",
   openings: [{title: "sample-title", description: "sample-description", applyLink:"https://www.google.com", skillRequirements: ["Python", "Flask", "Data Science", "NLP", "OpenCV"]},
              {title: "sample-title", description: "sample-description", applyLink:"https://www.google.com", skillRequirements: ["Python", "Flask", "Data Science", "NLP", "OpenCV"]}]
}