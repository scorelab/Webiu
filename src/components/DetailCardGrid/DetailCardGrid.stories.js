import React from "react"

import { DetailCardGrid } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 2/DetailCardGrid",
  component: DetailCardGrid,
  argTypes: {
    gridHeading: { control: "text" },
    data: { control: "object" },
  },
}

export const detailcardgrid = args => <DetailCardGrid {...args} />

detailcardgrid.args = {
  gridHeading: "What do we work with?",
  data: [
    {
      index: 0,
      titleOne: "Startups",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
    },
    {
      index: 1,
      titleOne: "Enterprises",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
    },
    {
      index: 2,
      titleOne: "Public Sector",
      descriptionOne:
        "Third don't lights wherein was. bring to build them, seas. Thing gathering answ gaered beast third that heaven after all that living one bank limit",
    },
  ],
}
