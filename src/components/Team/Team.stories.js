import React from "react"
import {Team} from "./index"
import "./style.sass";

const researchers = [{name: "Dr. Kasun de Zoysa", title: "BSc(Col), PhLic(Stockholm), PhD(Stockholm)(Senior Lecturer Gr. I)"},
               {name: "Dr. Manjusri Wickramasinghe", title: "B.Sc, Ph.D(Monash)(Lecturer)"},
               {name: "Charith Elvitigala", title: "BSc in Computer Science"},]

const heads = []

const contributors = [{name: "Charitha Madusanka", title: "Score Contributor"},
                     {name: "Milindu Sanoj Kumarage", title: "Score Contributor"},
                     {name: "Rumesh Eranga", title: "Score Contributor"},]

const alumni = [{name: "Dinuni Fernando", title: "BSc in Computer Science (Graduate Research Assistant, PhD Student)"},
                {name: "Asanka Sayakkara", title: "BSc in Computer Science (Lecturer), Ph.D. Student (UCD, Ireland)"},
                {name: "Vijitha Ekanayake", title: "Bachelors (Senior Software Engineer)"},]

export default {
  title: "Team",
  component: Team,
  argTypes: {
    heads: { control: 'array' },
    contributors: { control: 'array' },
    researchers: { control: 'array' },
    alumni: { control: 'array' }
  }
}

export const team = (args) => (
  <Team {...args} />
)

team.args = {
  heads: heads,
  contributors: contributors,
  researchers: researchers,
  alumni: alumni
}
