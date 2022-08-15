## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the NewsFeed Component

This is a resuasble component for showing the news and media coverage. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {NewsFeed} from "../components/NewsFeed";`

## How to handle props to the component

```
<NewsFeed
    mainFeedGenre = "sample-feed-genre",
    mainFeedDate = "sample-feed-date",
    mainFeedDescription = "sample-feed-Description",
    mainFeedComment = "sample-feed-comment",
    mainFeedlikes = "sample-feed-likes" ,
    sideFeedGenre = "sample-feed-genre" ,
    sideFeedDate = "sample-feed-date" ,
    sideFeedDescription = "sample-feed-Description" ,
    sideFeedComment = "sample-feed-comment",
    sideFeedlikes = "sample-feed-likes" ,
 />
```

`mainFeedGenre` prop is the genre of the news or blog
`mainFeedDate` prop is the date of publish of news or blog
`mainFeedDescription` prop is the short description of the news
`mainFeedComment` the prop is number of comments on the news or particualr blog
`mainFeedlikes` the prop is number of likes on the news or particualr blog
`sideFeedGenre` prop is the genre of the news or blog
`sideFeedDate` prop is the date of publish of news or blog
`sideFeedDescription` prop is the short description of the news
`sideFeedComment` the prop is number of comments on the news or particualr blog
`sideFeedlikes` the prop is number of likes on the news or particualr blog
