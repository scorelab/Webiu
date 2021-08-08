import React from 'react';

import { MailingListFeed } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/MailingListFeed',
  component: MailingListFeed,
  argTypes: {
     title: {control: 'text'},
     feedUrl: {control: 'text'},
     small: {control: 'boolean'}
  }
};

export const mailinglistfeed = (args) => <MailingListFeed {...args} />

mailinglistfeed.args = {
   title: "Mailing List Feed",
   feedUrl: "https://groups.google.com/forum/feed/score-community/msgs/rss.xml?num=50",
   small: false
}