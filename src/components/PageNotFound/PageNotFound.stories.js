import React from "react"
import {PageNotFound} from "./index"
import "./style.sass";

const image = "https://scorelab.org/images/404.png";

const mainText = "PAGE NOT FOUND"

const subText = "The page you are looking for, does not exists!"

export default {
  title: "PageNotFound",
  component: PageNotFound,
  argTypes: {
    image: { control: 'text' },
    mainText: { control: 'text' },
    subText: { control: 'text' }
  }
}

export const pagenotfound = (args) => (
  <PageNotFound {...args} />
)

pagenotfound.args = {
  image: image,
  mainText: mainText,
  subText: subText
}
