import React from "react"

import { DocsBanner } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/DocsBanner",
  component: DocsBanner,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
  },
}

export const docsbanner = args => <DocsBanner {...args} />

docsbanner.args = {
  mainText: "SCoRe lab for Beginners Blog Post",
  subText:
    "Learn about high-level topics related to SCoRe Lab development such as development workflows, programs, myths, dApps,  and client SDKs.",
  buttonText: "Read Docs",
  buttonLink: "#",
}
