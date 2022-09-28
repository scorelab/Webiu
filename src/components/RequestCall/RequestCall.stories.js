import React from "react"

import { RequestCall } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/RequestCall",
  component: RequestCall,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    buttonText: { control: "text" },
    image: { control: "text" },
  },
}

export const requestcall = args => <RequestCall {...args} />

requestcall.args = {
  subText: "TAKE A LOOK AT OUR",
  mainText: "Request a call back ",
  image:
    "https://user-images.githubusercontent.com/64387054/190870957-02ed9cba-d3a9-4532-a684-e5963ceee174.png",
  buttonText: "Submit",
}
