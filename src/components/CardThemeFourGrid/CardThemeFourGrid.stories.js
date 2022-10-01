import React from "react"

import { CardThemeFourGrid } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/CardThemeFourGrid ",
  component: CardThemeFourGrid,
  argTypes: {
    image: { control: "text" },
    dataUpperGrid: { control: "object" },
    dataLowerGrid: { control: "object" },
  },
}

export const cardthemefourgrid = args => <CardThemeFourGrid {...args} />

cardthemefourgrid.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/192136096-4dbd8cb7-6dfd-4b26-ae26-63a32ae1db3e.png",
  dataLowerGrid: [
    {
      image:
        "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
      title: "Exchange Fiat for Crypto",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
    },
    {
      image:
        "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
      title: "Exchange Fiat for Crypto",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
    },
    {
      image:
        "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
      title: "Exchange Fiat for Crypto",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
    },
  ],
  dataUpperGrid: [
    {
      image:
        "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
      title: "Exchange Fiat for Crypto",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
    },
    {
      image:
        "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
      title: "Exchange Fiat for Crypto",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
    },
    {
      image:
        "https://user-images.githubusercontent.com/64387054/188546985-fff89008-52c4-465e-9b8f-7db4a7fc0951.png",
      title: "Exchange Fiat for Crypto",
      description:
        "Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta s sem. Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultric ies orci, lobortis egesta.",
    },
  ],
}
