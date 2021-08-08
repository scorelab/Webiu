import React from 'react';

import { LinksList } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/LinksList',
  component: LinksList,
  argTypes: {
     links: {control: 'array'},
     isIcon: {control: 'boolean'},
     iconName: {control: 'text'}
  }
};

export const linkslist = (args) => <LinksList {...args} />

linkslist.args = {
   links: [{"name": "Sample1", "url": "https://google.com"},
           {"name": "Sample2", "url": "https://google.com"},
           {"name": "Sample3", "url": "https://google.com"}],
   isIcon: true,
   iconName: "faExternalLinkAlt"
}