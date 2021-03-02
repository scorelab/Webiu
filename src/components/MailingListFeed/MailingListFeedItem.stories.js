import React from "react"
import MailingListFeedItem from "./MailingListFeedItem"
import './style.sass';
export default {
  title: "MailingListFeed/MailingListFeedItem",
  component: MailingListFeedItem,
  argTypes: {
    image: { control: 'text' },
    author: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    publishedDate: { control: 'text' },
    slug: { control: 'text' },
  }
}
export const mailingListFeedItem = (args) => <MailingListFeedItem {...args} />;
mailingListFeedItem.args = {
  "image": "",
  "author": "Bansal Shashwat",
  "title": "Query",
  "description": "Hello Everyone , I am Shashwat Bansal and currently pursuing B. tech CSE. I am in 2nd year now and want to take participation in Google Summer of Code. I have some experience in react-native so I tried to run Go-social app. I have done all the prerequisites stated on GitHub page and at last I",
  "publishedDate": "2021-02-25 18:27:23",
  "slug": "https://groups.google.com/d/msg/score-community/DSHV3tI0ptY/kRy6nTpKBwAJ"
}