import React from "react"
import ProjectsListItem from "./ProjectListItem"
import './style.sass';
export default {
    title: "ProjectsList/ProjectsListItem",
    component: ProjectsListItem,
    argTypes: {
        image: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
    }
}
export const projectsListItem = (args) => <ProjectsListItem {...args} />;
projectsListItem.args = {
    "title": "Dronesym",
    "description": "Dronesym is a platform enabling users to handle and track their drone fleets in real time. Users can have functionality to add new drones configure their flight paths and monitor their progress through a web dashboard.",
    "image": "https://scorelab.org/logos/projects/dronesym.png",
};