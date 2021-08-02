import React from 'react';

import { Footer } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
     mainText: {control: 'text'}, 
     socialLinks: {control: {
         facebook: {control: 'text'},
         gitter: {control: 'text'},
         twitter: {control: 'text'},
         github: {control: 'text'},
         linkedin: {control: 'text'},
         medium: {control: 'text'}
     }}
  }
};

export const footer = (args) => <Footer {...args} />

footer.args = {
   mainText: "Copyright © SCoRe Lab",
   socialLinks: {facebook: "/", gitter: "/", twitter: "/", github: "/", linkedin:"/", medium:"/"}
}