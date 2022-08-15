import React from "react"

import { NewsFeed } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 1/NewsFeed",
  component: NewsFeed,
  argTypes: {
    mainFeedGenre: { control: "text" },
    mainFeedDate: { control: "text" },
    mainFeedDescription: { control: "text" },
    mainFeedComment: { control: "text" },
    mainFeedlikes: { control: "text" },
    sideFeedGenre: { control: "text" },
    sideFeedDate: { control: "text" },
    sideFeedDescription: { control: "text" },
    sideFeedComment: { control: "text" },
    sideFeedlikes: { control: "text" },
    image: {control: "text"},
  },
}

export const newsfeed = args => <NewsFeed {...args} />

newsfeed.args = {
  mainFeedGenre: "Software / Business",
  mainFeedDate: "May 10, 2022",
  mainFeedDescription:
    "Appear called is blessed good void had given from which Lights Saying image.",
  mainFeedComment: "02 comments",
  mainFeedlikes: "20 likes",
  sideFeedGenre: "Software / Business",
  sideFeedDate: "May 10, 2022",
  sideFeedDescription:
    "Appear called is blessed good void had given from which Lights Saying image.",
  sideFeedComment: "02 comments",
  sideFeedlikes: "20 likes",

  image:
    "https://user-images.githubusercontent.com/64387054/179350474-f8abfeec-faca-4394-8320-b3c1650ca7ca.png",
}
