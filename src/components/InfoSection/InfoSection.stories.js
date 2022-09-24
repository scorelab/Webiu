import React from "react"

import { InfoSection } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/InfoSection ",
  component: InfoSection,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    infoListData: { control: "object" },
  },
}

export const infosection = args => <InfoSection {...args} />

infosection.args = {
  subText: "TAKE A LOOK AT OUR",
  mainText: "A Simple Trading System",
  infoListData: [
    {
      image:
        "https://user-images.githubusercontent.com/64387054/192018202-3679e749-76b2-46a2-b22a-92c129ce4e82.png",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris.",
      text: "Create a wallet",
    },
    {
      image:
        "https://user-images.githubusercontent.com/64387054/192018213-3cd8b1c4-810f-4419-96ae-0e50607fcefd.png",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris.",
      text: "Make Payments",
    },
    {
      image:
        "https://user-images.githubusercontent.com/64387054/192018229-481237a8-5bbf-4ee7-8215-31cd00744b75.png",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris.",
      text: "Buy or sell orders",
    },
  ],
}
