import React from "react"
import ProjectDetail from "./index"
import './style.sass';
export default {
    title: "ProjectsList/ProjectDetail",
    component: ProjectDetail,
    argTypes: {
        project: {
            control: {
                slug: { control: 'text' },
                title: { control: 'text' },
                id: { control: 'text' },
                description: { control: 'text' },
                image: { control: 'array' },
                screenshots: { control: 'text' },
                links: {
                    control: {
                        name: { control: 'text' },
                        url: { control: 'text' },
                    }
                }
            }
        },
    }
}
export const Projectdetail = (args) => <ProjectDetail {...args} />;
Projectdetail.args = {
    "project": {
        "slug": "/projects/animalrescue",
        "title": "Animal Rescue",
        "description": "AnimalRescue App initiative to develop a mobile app to track animals that are in need of help. AnimalRescue app connect animal lovers, vets, and other NGOs in real time. They can track the animals that actually need the help.",
        "image": "https://picsum.photos/200/300",
        "screenshots": null,
        "links": [
            {
                "name": "Github Repo",
                "url": "https://github.com/scorelab"
            },
            {
                "name": "Gitter Channel",
                "url": "https://gitter.im/scorelab"
            }
        ]
    }
}