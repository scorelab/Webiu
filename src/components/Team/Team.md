## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Team Component

This is a resuasble component for displaying the list of team members of an organization. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Team} from "../components/Team";`

## How to handle props to the component

```
<Team
    title="Team Component" showSearchBar={true}
    contributors={[{name: "", title: ""}, {name: "", title: ""}]}
    alumni={[{name: "", title: ""}, {name: "", title: ""}]}
    heads={[{name: "", title: ""}, {name: "", title: ""}]}
    researchers={[{name: "", title: ""}, {name: "", title: ""}]}
/>
```

`title` prop is the title of the section
`showSearchBar` prop is a boolean based on which we decide whether to show the search bar or not
`contributors` prop is the array of contributors
`alumni` prop is the array of alumni
`heads` prop is the array of heads
`researchers` prop is the array of researchers
