import React from "react"
import Team from "./index"
import './style.sass';
export default {
  title: "Team/Team",
  component: Team,
  argTypes:
  {
    alumni: {
      control: {
        name: { control: 'text' },
        title: { control: 'text' }
      }
    },
    researchers: {
      control: {
        name: { control: 'text' },
        title: { control: 'text' }
      }
    },
    heads: {
      control: {
        name: { control: 'text' },
        title: { control: 'text' }
      }
    },
  }
}
export const team = (args) => <Team {...args} />;
team.args = {
  "contributors": [
    {
      "name": "Sample Name",
      "title": "Score Contributor"
    },

  ],
  "researchers": [
    {
      "name": "Sample Name",
      "title": "Score Contributor"
    },

  ],
  "alumni": [
    {
      "name": "Sample Name",
      "title": "BSc in Computer Science (Graduate Research Assistant, PhD Student)"
    },
  ],
  "heads": [
    {
      "name": "Sample Name",
      "title": "BSc in Computer Science (Graduate Research Assistant, PhD Student)"
    },
  ]
};