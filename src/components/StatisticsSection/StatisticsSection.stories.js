import React from "react"

import StatisticsSection from "."

export default {
  title: "LearningManagementSystem/StatisticsSection",
  component: StatisticsSection,
  argTypes: {
    statistics: { control: "array" },
  },
}

export const statisticsSection = args => <StatisticsSection {...args} />

statisticsSection.args = {
  statistics: [
    { name: "Groups", value: "30" },
    { name: "Teachers", value: "40+" },
    { name: "Students", value: "1k+" },
  ],
}
