import React from 'react';

import { Footer } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/Footer',
  component: Footer,
  argTypes: {
     mainText: {control: 'text'}, 
     socialLinks: {control: 'object'}
  }
};

export const footer = (args) => <Footer {...args} />

footer.args = {
   mainText: "Copyright © SCoRe Lab",
   socialLinks: {facebook: "#", gitter: "#", twitter: "#", github: "#", linkedin:"#", medium:"#"}
}