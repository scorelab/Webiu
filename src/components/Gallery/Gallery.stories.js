import React from "react"

import { Gallery } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "General/Gallery",
  component: Gallery,
  argTypes: {
    subText: { control: "text" },
    mainText: { control: "text" },
    data: { control: "array" },
  },
}

export const gallery = args => <Gallery {...args} />

gallery.args = {
  subText: "Memories",
  mainText: "Past Year Gallery",
  data: [
    {
      image: "https://user-images.githubusercontent.com/56475750/203128758-e02f4766-5dfb-4eb0-9e36-8ce2c8883ae4.png",
      title: "Freshers being mentored",
    },
    {
      image: "https://user-images.githubusercontent.com/56475750/203128871-79b36496-7f5a-4df2-aeef-cda8bbafc6e9.png",
      title: "Women in Tech",
    },
    {
      image: "https://user-images.githubusercontent.com/56475750/203128989-7d70215d-3b78-4649-b8d0-3187126846fe.png",
      title: "Amazing work environment",
    },
    {
      image: "https://user-images.githubusercontent.com/56475750/203129183-8c3b6305-9daa-4b79-89f1-642f68cc34fa.png",
      title: "Made Connections",
    },
    {
      image: "https://user-images.githubusercontent.com/56475750/203129450-deda01a6-f3de-44e8-bb21-c607c4c64bc5.png",
      title: "Achieved Goals",
    },
    {
      image: "https://user-images.githubusercontent.com/56475750/203129311-c3f54810-aaae-48bb-bc97-61aa6385249c.png",
      title: "Discussed Creative Ideas",
    },
  ],
}
