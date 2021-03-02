import React from "react"
import PublicationListItem from "./PublicationListItem"
import './style.sass';
export default {
    title: "PublicationList/PublicationListItem",
    component: PublicationListItem,
    argTypes: {
        title: { control: 'text' },
        conference: { control: 'text' },
        authors: { control: 'array' },
        slug: { control: 'text' },
    }
}
export const publicationListItem = (args) => <PublicationListItem {...args} />;
publicationListItem.args = {
    "title": "Identifying Mosquito Breeding Sites via Drone Images",
    "conference": "Proceedings of the 3rd Workshop on Micro Aerial Vehicle Networks, Systems, and Applications - 2017",
    "authors": [
        "Chathura Suduwella",
        "Akarshani Amarasinghe",
        "Lasith Niroshan",
        "Charith Elvitigala",
        "Kasun De Zoysa",
        "Chamath Keppetiyagama"
    ],
    "slug": "https://dl.acm.org/citation.cfm?id=3086442"
};