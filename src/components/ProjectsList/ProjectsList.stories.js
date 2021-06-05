import React from "react"
import ProjectsList from "./index"
import './style.sass';
export default {
    title: "ProjectsList/ProjectsList",
    component: ProjectsList,
    argTypes: {
        title: { control: 'text' },
        limit: { control: 'number' },
        items: {
            control: {
                id: { control: 'text' },
                title: { control: 'text' },
                template : { control: 'text' },
                description: { control: 'text' },
                image: { control: 'array' },
                slug: { control: 'text' },

            }
        },
        suffle: { control: 'boolean' }
    }
}
export const projectslist = (args) => <ProjectsList {...args} />;
projectslist.args = {
title:"Project",
items:[
{
  "id": "e2468e29-35bf-524d-9d69-842330a8e4b1",
  "title": "Dronesym",
  "template": "project",
  "description": "Dronesym is a platform enabling users to handle and track their drone fleets in real time. Users can have functionality to add new drones configure their flight paths and monitor their progress through a web dashboard.",
  "image": "https://scorelab.org/logos/projects/dronesym.png",
  "slug": "/projects/dronesym"

}]
};