## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the GsocIdeaList Component
This is a resuasble component for showing possible idealists for an organization in GSoC. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {GsocIdeaList} from "../components/GsocIdeaList";`

## How to handle props to the component
```
<GsocIdeaList previousProjects={[{year: "2020", link: "sample-link"},
                                 {year: "2019", link: "sample-link"},
                                 {year: "2018", link: "sample-link"},
                                 {year: "2017", link: "sample-link"}]} 
              heading="GSoC IdeaList" 
              description="Lorem ipsum" 
              listItems={[{title: "sample", description: "sample", expectedresults: "sample", possiblementors: "sample", requiredknowledge: "sample", githuburl: "sample"}]}
              />
```

`previousProjects` prop is the array of previous projects links
`heading` prop is the heading of the section
`description` prop is the description of the section
`listItems` prop is the array od all the ideas