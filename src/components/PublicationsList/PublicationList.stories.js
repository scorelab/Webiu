import React from "react"
import PublicationList from "./index"
import './style.sass';
export default {
    title: "PublicationList/PublicationList",
    component: PublicationList,
    argTypes: {
        title: { control: 'text' },
        limit: { control: 'number' },
        items: {
            control: {
                title: { control: 'text' },
                conference: { control: 'text' },
                authors: { control: 'array' },
                slug: { control: 'text' },

            }
        },
        suffle: { control: 'boolean' }
    }
}
export const publicationList = (args) => <PublicationList {...args} />;
publicationList.args = {
title:"Publications",
items:[{
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
}]
};