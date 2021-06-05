import React from "react"
import FeedItemSmall from "./FeedItemSmall"
import './style.sass';
export default {
    title: "MediumFeed/FeedItemSmall",
    component: FeedItemSmall,
    argTypes: {
        title: { control: 'text' },
        publishedDate: { control: 'text' },
        author: { control: 'text' },
        image: { control: 'text' },
        slug: { control: 'text' },
    }
}
export const feedItemSmall = (args) => <FeedItemSmall {...args} />;
feedItemSmall.args = {
  "title": "Journey into GSoC — Part 11",
  "publishedDate": "2020-09-09 03:14:56",
  "image": "https://cdn-images-1.medium.com/max/900/1*zlRBMFUHnmsqfa_ZufyMiA.jpeg",
  "author": "Omal Vindula",
  "slug": "https://medium.com/scorelab/journey-into-gsoc-part-11-8062e394304a?source=rss----1e2afd218c7d---4"
}