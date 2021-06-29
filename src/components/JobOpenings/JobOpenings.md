## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the JobOpenings Component

This is a resuasble component for dispalying detailed information on job, internship or reasearch opportunities available in an organization. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {JobOpenings} from "../components/JobOpenings";`

## How to handle props to the component

```
<JobOpenings title="Current Openings"
                   openings={[{title: "sample-title", description: "sample-description", applyLink:"https://www.google.com", skillRequirements: ["Python", "Flask", "Data Science", "NLP", "OpenCV"]}]} />
```

`title` prop is the title of your job portal
`openings` prop is the array of the number of opportunities available in the organization at that point of time
