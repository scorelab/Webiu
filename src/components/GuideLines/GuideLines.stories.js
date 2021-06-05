import React from "react"
import GuideLines from "./index"
import './style.sass';
export default {

  title: "GuideLines",
  component: GuideLines,
  argTypes: {
    heading: { control: 'text' },
    description: { control: 'text' },
    guidelines: { control: 'array' },

  }
}
export const guideLines = (args) => <GuideLines {...args} />;
guideLines.args = {
  heading: "Guide line",
  description: "Description ",
 guidelines:["guidelines1","guidelines2","guidelines3"]
}