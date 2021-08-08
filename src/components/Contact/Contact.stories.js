import React from 'react';

import { Contact } from './index';

import 'bootstrap/dist/css/bootstrap.css';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Home/Contact',
  component: Contact,
  argTypes: {
     contactTitle: {control: 'text'},
     subscribeTitle: {control: 'text'},
     contactMessage: {control: 'text'},
     subscribeMessage: {control: 'text'},
     handleContactSubmit: {control: 'function'},
     handleSubscribeSubmit: {control: 'function'}
  }
};

export const contact = (args) => <Contact {...args} handleContactSubmit={action("contact submit")} handleSubscribeSubmit={action("subscribe submit")} />

contact.args = {
   contactTitle: "Contact US",
   subscribeTitle: "Subscribe to News",
   contactMessage: "contact us",
   subscribeMessage: "subscribe to our newsletter"
}