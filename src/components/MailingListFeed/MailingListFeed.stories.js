import React from "react"
import MailingListFeed from "./index"
import './style.sass';
export default {
    title: "MailingListFeed/MailingListFeed",
    component: MailingListFeed,
    argTypes: {
        title: { control: 'text' },
        feedUrl: { control: 'text' },
        small: { control: 'boolean' }
    }
}
export const mailingListFeed = (args) => <MailingListFeed {...args} />;
mailingListFeed.args = {
    title: "Query",
    feedUrl: "Your url"
}