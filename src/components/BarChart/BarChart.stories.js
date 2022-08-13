import React from "react"

import BarChart from "."

export default {
  title: "LearningManagementSystem/BarChart",
  component: BarChart,
  argTypes: {
    labels: { control: "array" },
    title: { control: "text" },
    data: { control: "array" },
    labelsName: { control: "text" },
    color: { control: "text" },
  },
}

export const barChart = args => <BarChart {...args} />

barChart.args = {
  labels: [
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
  ],
  title: "Marks",
  data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 10, 91, 12, 15, 11],
  labelsName: "months",
  color: "#f87979",
}
