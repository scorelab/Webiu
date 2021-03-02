import React from "react"
import TeamListItem from "./TeamListItem"
import './style.sass';
export default {
    title: "Team/TeamListItem",
    component: TeamListItem,
    argTypes:
    {
        name: { control: 'text' },
        title: { control: 'text' },
        image: { control: 'text' }
    }
}
export const teamListItem = (args) => <TeamListItem {...args} />;
teamListItem.args = {
    name: "Sample name",
    title: "Sample title",
    image: "https://scorelab.org/logos/projects/dronesym.png"
             
};