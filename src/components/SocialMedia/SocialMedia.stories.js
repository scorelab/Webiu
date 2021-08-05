import React from 'react';

import { SocialMedia } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/SocialMedia',
  component: SocialMedia,
  argTypes: {
     facebookProfile: {control: 'text'},
     twitterProfile: {control : 'text'},
     header: {control: 'text'},
     width: {control: 'text'},
     height: {control: 'text'}
  }
};

export const socialmedia = (args) => <SocialMedia {...args} />

socialmedia.args = {
   header: "Facebook and Twitter",
   width: "330px",
   height: "340px",
   facebookProfile: "SCoRe.Lab.Org",
   twitterProfile: "gsoc"
}