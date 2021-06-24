## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GithubOrgMembers Component

This is a resuasble component for displaying all the members of a github organization. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GithubOrgMembers} from "../components/GithubOrgMembers";`

## How to handle props to the component

```
<GithubOrgMembers orgname="scorelab" title="sample-title" limit={10}
                  auth_token="sample-token" showSearchBar={true} />
```

`orgname` prop is the name of the organization whose members we wish to display
`title` prop is the title of th section
`limit` prop is the limit to number of members per page
`auth_token` is the authorization token to be used to access data
`showSearchBar` prop is the boolean which decides whether to show the search bar or not
