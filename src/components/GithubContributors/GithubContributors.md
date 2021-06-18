## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GithubContributors Component

This is a resuasble component for displaying all the contributors for a github project. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GithubContributors} from "../components/GithubContributors";`

## How to handle props to the component

```
<GithubContributors projectname="scorelab/webiu" title="Contributors of" limit={10}
                    auth_token="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" showSearchBar={true} />
```

`projectname` prop is the name of the project you wish to enquire
`title` prop is the title of the section
`limit` prop is the limit to number of contributors per page
`auth_token` is the authorization token to be used to access data
`showSearchBar` is the boolean prop which decides whether to show the search bar
