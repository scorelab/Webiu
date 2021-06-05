import React from "react"
import JobOpening from "./index"
import './style.sass';
export default {
    title: "JobOpening",
    component: JobOpening,
    argTypes: {
        title: { control: 'text' },
        openings: {
            control: {
                title: { control: 'text' },
                description: { control: 'text' },
                skillRequirements: { control: 'array' }
            }
        }
    }
}
export const jobOpening = (args) => <JobOpening  {...args} />;
jobOpening.args = {
 title:"Job title",
 openings : [{
  "title":"Intern",
  " description":"We need a intern",
"skillRequirements" :["PHP","Java","Python"]
}]
}