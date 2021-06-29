## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ProjectsList Component

This is a resuasble component for displaying the list of projects. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ProjectsList} from "../components/ProjectsList";`

## How to handle props to the component

```
<ProjectList title="sample-title" showSearchBar={true} searchPlaceHolder="sample-text" limit={10}
             items={[{title: "sample-title", description: "sample-description", image: "sample-path", slug: "sample-link"},]} />
```

`title` prop is the title of the section
`showSearchBar` prop is the boolean based on which we show or don't show the search bar
`searchPlaceHolder` prop is the placeholder text of search bar
`limit` prop is the number of projects we wish to show per page
`items` prop is an array of all the projects
