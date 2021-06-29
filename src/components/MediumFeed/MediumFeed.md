## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the MediumFeed Component

This is a resuasble component for displaying the feed of blogs for an organization for e.g the medium blogs. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {MediumFeed} from "../components/MediumFeed";`

## How to handle props to the component

```
<MediumFeed title="Recent Blogs" mediumUrl="sample-url" small={false} limit={10}/>
```

`title` prop is the title of the section
`mediumUrl` prop is the url of the feed og blog website
`small` prop is the boolean which decides how much portion of the screen will be consumed
`limit` prop is the limit to number of blogs we wish to show
