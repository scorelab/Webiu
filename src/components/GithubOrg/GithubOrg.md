## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GithubOrg Component

This is a resuasble component for fetching the details of a github organization. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GithubOrg} from "../components/GithubOrg";`

## How to handle props to the component

```
<GithubOrg orgname="scorelab" limit={12} auth_token="sample-token" />
```

`orgname` prop is the name of the organization whose data we wish to fetch
`limit` prop is a limit to the number of repositories we wish to display
