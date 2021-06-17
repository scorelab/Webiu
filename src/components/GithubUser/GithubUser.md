## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GithubUSer Component

This is a resuasble component for showing the details of a github user via github API. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GithubUser} from "../components/GithubUser";`

## How to handle props to the component

```
<GithubUser username="sample-username" title="Github Profile" auth_token="sample-token" />
```

`username` prop is the username of the person whose detail we wish to fetch
`title` prop is the title of the section we want to display
