## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the GitHubRepo Component

This is a resuasble component for displaying the information about specific github repos. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {GithubRepo} from "../components/GithubRepo";`

## How to handle props to the component

```
<GithubRepo reponame="scorelab/webiu" title="GitHub Repository" />
```

`reponame` prop is the name of the repository whose info we wish to display
`title` prop is the title of the section
