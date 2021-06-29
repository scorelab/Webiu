## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the MailingListFeed Component

This is a resuasble component for mailing list activites in an organization. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {MailingListFeed} from "../components/MailingListFeed";`

## How to handle props to the component

```
<MailingListFeed title="Mailing List Feed" feedUrl="sample-feed-url" small={false} />
```

`title` prop is the title of the section
`feedUrl` prop is the url for groups feed of the organization for e.g google-groups feed
`small` prop is the boolean to decide whether to render the component in full width of customized width
