## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the BarChart Component

This is a resuasble component for showing data in chart. This could be useful in case of showing & analysing data. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import BarChart from "../components/BarChart";`

## How to handle props to the component

```
<BarChart labels={[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]} title="Marks" data={[40, 20, 12, 39, 10, 40, 39, 80, 40, 10, 91, 12, 15, 11]} labelsName: "months" color: "#f87979" />
```

`labels` prop is the labels of x axis of the bar chart
`title` prop is title of the chart
`data` prop is the measurements
`labelsName` prop is the name of labels
`color` prop is the hexadecimal value of appropriate color
