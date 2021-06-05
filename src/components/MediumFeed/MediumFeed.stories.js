import React from "react"
import MediumFeed from "./index"
import './style.sass';
export default {
    title: "MediumFeed/MediumFeed",
    component: MediumFeed,
    argTypes: {
        title: { control: 'text' },
        mediumUrl: { control: 'text' },
        small: { control: 'boolean' },
        limit: { control: 'number' },
    }
}
export const mediumfeed = (args) => <MediumFeed {...args} />;
mediumfeed.args = {
    "title": "Journey into GSoC — Part 11",
    "mediumUrl": "Your url",
}