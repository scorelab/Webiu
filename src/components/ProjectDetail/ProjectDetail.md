## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ProjectDetail Component

This is a resuasble component for dispalying detailed information of a particular project when it is clicked on. It shows the project overview, images and links to contribute. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ProjectDetail} from "../components/ProjectDetail";`

## How to handle props to the component

```
<ProjectDetail project={{image: "sample-image",
                         title: "sample-title",
                         description: "sample-description",
                         screenshots: [{imageUrl: "sample-img"}, {imageUrl: "sample-img"}],
                         links: [{url: "sample-link", name: "Link"}, {url: "sample-link", name: "Link"}]}}
                        />
```

`project` prop is the object which contains all the description about particular project as key-value pairs
