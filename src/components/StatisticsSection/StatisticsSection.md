## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the StatisticsSection Component

This is a resuasble component for showing the statistics of an organization or personal portfolio. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import StatisticsSection from "../components/StatisticsSection";`

## How to handle props to the component

```
<Statistics statistics={[{ name: "Groups", value: "30" }]}
```

`statistics` prop is the array of details we wish to reflect on the page
