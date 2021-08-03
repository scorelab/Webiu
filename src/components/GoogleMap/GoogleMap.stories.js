import React from 'react';

import { GoogleMap } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'GoogleMap',
  component: GoogleMap,
  argTypes: {
     mapId: {control: 'text'},
     header: {control: 'text'},
     width: {control: 'text'},
     height: {control: 'text'}
  }
};

export const googlemap = (args) => <GoogleMap {...args} />

googlemap.args = {
   mapId: "pb=!1m18!1m12!1m3!1d3650.1185838921524!2d86.43901351493429!3d23.814381884557864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1593296068669!5m2!1sen!2sin",
   header: "Google Map Component",
   width: "90%",
   height: "500px"
}