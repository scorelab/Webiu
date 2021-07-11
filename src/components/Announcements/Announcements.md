## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Announcements Component

This is a resuasble component for showing recent announcements of an organization. This could be useful in case of an academic website. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {Announcements} from "../components/Announcements";`

## How to handle props to the component

```
When only the vertical announcement is needed

<Announcements header="Announcements" direction="up" speed="2" title="Title"
               data={[{text: "sample-1", link: "sample-link"},
                      {text: "sample-2", link: "sample-link"}]} />

When we need the horizontal announcement

<Announcements header="Announcements" direction="left" speed="10" horizontal={true} title="Announcements"
               data={[{text: "sample-description", link: "sample-link"}]} />
```

`header` prop is the title of the section
`direction` prop is the direction of movement e.g. up
`speed` prop is the measure of pace of movement e.g. 2
`data` prop is the array of all notices and announcements
`horizontal` prop is the bool to decide if it is vertical or horizontal default to vertical
