## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the PublicationsList Component

This is a resuasble component for showing the achievements and research papers. This could be used for showing achievements and research papers. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {PublicationsList} from "../components/PublicationsList";`

## How to handle props to the component

When we pass publications list

```
<PublicationsList title="Research Journels" limit={10} suffle={true} publication={true} achievements={true}
                  items={[{title : "title", conference: "text", authors: ["author-1", "author-2"], slug: "/"}]} />
```

When we pass achievements list

```
<PublicationsList title="Achievements" limit={10} suffle={true} publication={false} achievements={true}
                        items={[{title : "sample-title", image: "sample-description", description: "sample",  slug: "/"}]} />
```

`title` prop is the title of the section
`limit` and `suffle` props are the number and boolean to number of items
`items` prop is the array of items to be displayed
`publication` and `achievements` are the boolean which decides what to render
