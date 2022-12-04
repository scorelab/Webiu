import React from "react"

import { Schedule } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Home/Schedule",
  component: Schedule,
  argTypes: {
    subText: { control: "text" },
    mainText: { control: "text" },
    daysList: { control: "array" },
    itemsList: { control: "array" },
  },
}

export const schedule = args => <Schedule {...args} />

schedule.args = {
  subText: "OUR TIMETABLE",
  mainText: "SCHEDULE PLAN",
  daysList: [
    {
      day: "Monday",
      date: "October 20, 2022",
    },
    {
      day: "Tuesday",
      date: "October 21, 2022",
    },
    {
      day: "Wednesday",
      date: "October 22, 2022",
    },
  ],
  itemsList: [
    {
      title: "Deep Dive into SCoRe lab",
      speaker: "Gary Armstrong",
      position: "Researcher at Score lab",
      imageUrl:
        "https://user-images.githubusercontent.com/56475750/205447574-ff4f2bfa-fb27-448b-93e6-a9090ada4487.png",
      pageUrl: "https://scorelab.org/",
    },
    {
      title: "Kickstart your open-source journey",
      speaker: "Gary Armstrong",
      position: "Researcher at Score lab",
      imageUrl:
        "https://user-images.githubusercontent.com/56475750/205447574-ff4f2bfa-fb27-448b-93e6-a9090ada4487.png",
      pageUrl: "https://scorelab.org/",
    },
    {
      title: "Understanding Score lab projects ",
      speaker: "Gary Armstrong",
      position: "Researcher at Score lab",
      imageUrl:
        "https://user-images.githubusercontent.com/56475750/205447574-ff4f2bfa-fb27-448b-93e6-a9090ada4487.png",
      pageUrl: "https://scorelab.org/",
    },
  ],
}
