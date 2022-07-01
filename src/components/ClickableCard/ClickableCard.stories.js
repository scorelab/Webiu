import Typography from "@material-ui/core/Typography"
import React from "react"

import ClickableCard from "."

export default {
  title: "General/ClickableCard",
  component: ClickableCard,
  argTypes: {
    name: { control: "text" },
    img: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    containerStyle: { Control: "object" },
    innerContainerStyle: { Control: "object" },
    imageContainerStyle: { Control: "object" },
    imageStyle: { Control: "object" },
  },
}

export const clickableCard = args => <ClickableCard {...args} />

clickableCard.args = {
  name: "Score Lab",
  img: "https://scorelab.org/images/community.png",
  link: "/home",
  title: "Score Lab",
  description: "Welcome All",
}
