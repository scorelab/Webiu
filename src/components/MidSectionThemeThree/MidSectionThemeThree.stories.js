import React from "react"

import { MidSectionThemeThree } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/MidSectionThemeThree",
  component: MidSectionThemeThree,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    cardItems: { control: "array" },
    linkUrl: { control: "text" },
    linkText: { control: "text" },
  },
}

export const midsectionthemethree = args => <MidSectionThemeThree {...args} />

midsectionthemethree.args = {
  mainText: "Build Alongside with your Internet friends.",
  subText:
    "Building stuff alone is lame. Once you enroll we'll get you in a channel where you'll get to share progress with a cohort of awesome devs.",
  cardItems: [
    {
      image:
        "https://user-images.githubusercontent.com/56475750/215061001-0c44a74f-0b11-46e7-805e-07895733df5a.png",
      label: "Step by Step Guide",
    },
    {
      image:
        "https://user-images.githubusercontent.com/56475750/215061688-f49b6c5f-5230-487b-9dba-e23eefc9f8b7.png",
      label: "Live Kickoffs",
    },
    {
      image:
        "https://user-images.githubusercontent.com/56475750/215063054-58da14e8-78fa-4042-9c44-c86e8a32a04a.png",
      label: "Community Support",
    },
    {
      image:
        "https://user-images.githubusercontent.com/56475750/215063239-d05be6c8-0186-4ef0-8d3c-aa8f2722b9be.png",
      label: "Demo Days",
    },
  ],
  linkUrl: "https://scorelab.org/",
  linkText: "Take a project for a spin",
}
