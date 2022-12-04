## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Schedule Component

This is a reusable component for the schedule built from scratch. It could be used to display schedule for scorelab events and workshops. The component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import {Schedule} from "../components/Schedule";`

## How to handle props to the component

```
<Schedule
   subText="OUR TIMETABLE"
   mainText="SCHEDULE PLAN"
   daysList={[{day: "Monday", date: "October 20, 2022"}]}
   itemsList={[{title: "sample mainText", speaker: "sample speaker name", position: "sample position",
                imageUrl: "sample image url", pageUrl: "sample page url"}]}
/>
```

`subText` prop of type text is the subtitle for the schedule
`mainText` prop of type text is the main title for schedule
`daysList` prop of type array having all weekdays and dates for the schedule
`itemsList` prop is the array of items which can be about a workshop or event each having title, subtitle and url.
