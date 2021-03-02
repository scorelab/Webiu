import React from "react"
import LetterAvatar from "./index"
import './style.sass';
export default {
  title: "LetterAvatar",
  component: LetterAvatar,
  argTypes: {
    name: { control: 'text' },
  }
}
export const letterAvatar = (args) => <LetterAvatar {...args} />;
letterAvatar.args = {
  name: "Sample",
}