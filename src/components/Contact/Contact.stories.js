import React from 'react';

import { Contact } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/Contact',
  component: Contact,
  argTypes: {
     contactTitle: {control: 'text'},
     subscribeTitle: {control: 'text'},
     contactMessage: {control: 'text'},
     subscribeMessage: {control: 'text'},
     handleContactSubmit: {action: 'Contact Clicked'},
     handleSubscribeSubmit: {action: 'Subscribe Clicked'}
  }
};

export const contact = (args) => <Contact {...args} />

contact.args = {
   contactTitle: "Contact US",
   subscribeTitle: "Subscribe to News",
   contactMessage: "contact us",
   subscribeMessage: "subscribe to our newsletter"
}