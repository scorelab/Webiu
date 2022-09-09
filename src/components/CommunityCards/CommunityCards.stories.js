import React from "react"

import { CommunityCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/CommunityCard",
  component: CommunityCard,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
}

export const communitycard = args => <CommunityCard {...args} />

communitycard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/185618616-f2668721-10e3-43cb-a7d2-1207b992b6ed.svg",
  title: "Find your tribe",
  description:
    "There is a tribe for everyone. Find and connect with like minded individuals to discuss, ponder, and celebrate together.",
}
