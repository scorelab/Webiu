import React from "react"
import LinksList from "./index"
import './style.sass';
export default {
    title: "LinksList",
    component: LinksList,
    argTypes: {
        links: {
            control: {
                name: { control: 'text' },
                url: { control: 'text' }
            }
        },
    }
}
export const linksList = (args) => <LinksList {...args} />;
linksList.args = {
    links: [{
        "name": "Scorelab",
        "url": "https://scorelab.org/"
    }],
}