import React from "react"

import { CountUpComp } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/CountUpComp",
  component: CountUpComp,
  argTypes: {
    countUpListData: { control: "object" },
  },
}

export const countupcomp = args => <CountUpComp {...args} />

countupcomp.args = {
  countUpListData: [
    { duration: 10, end: 1064, text: "Transactions per second" },
    { duration: 10, end: 77764340, text: "Total Transactions" },
    { duration: 10, end: 200, text: "Avg. cost per transaction" },
    { duration: 10, end: 1773, text: "Validator nodes" },
  ],
}
