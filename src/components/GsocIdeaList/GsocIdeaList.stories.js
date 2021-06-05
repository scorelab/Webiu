import React from "react"
import GsocIdeaList from "./index"
import './style.sass';
export default {
  title: "GsocIdeaList",
  component: GsocIdeaList,
  argTypes: {
    heading: { control: 'text' },
    description: { control: 'text' },
    listItems: {
      control: {
        title: { control: 'text' },
        description: { control: 'text' },
        expectedresults: { control: 'text' },
        requiredknowledge: { control: 'text' },
        possiblementors: { control: 'text' },
        githuburl: { control: 'text' }
      }
    }
  }
}
export const gsocidealist = (args) => <GsocIdeaList {...args} />;
gsocidealist.args = {
  heading: 'Idea List for Storybook',
  description: "The following is the idea list for Google Summer of Code 2021",
  listItems: [{
    title: "#1: Improve the ImageLab user experience",
    description: "ImageLab is a visual programming tool for OpenCV.",
    expectedresults: 'Propose and implement a complete overhaul to the UI including the support for theming1',
    requiredknowledge: "Java, JavaFX",
    possiblementors: 'Oshan Mudannayake',
    githuburl: "https://github.com/scorelab/imagelab"
  }]
};