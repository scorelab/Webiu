import React from "react"

import { SummitCard } from "./index"

import  "bootstrap/dist/css/bootstrap.css"

export default {
    title: "General/SummitCard",
    component: SummitCard,
    argTypes: {
        title: { control: "text" },
        subText: { control: "text"},
        cardData: { control: "array"},
        emptyMessage: { control: "text"},
    },
}

export const summitCard = args => <SummitCard {...args} />

summitCard.args = {
    title: "Summit Meeting",
    subText: "What we offer",
    cardData: [
        {
            image:"https://user-images.githubusercontent.com/109169835/204906679-43affa5c-22d5-43d3-adb1-89835a781974.png",
            title:"Conference",
            description:"Nam libero tempore, cum Soluta nobis est eligendi optio cumque",
        },
        {
            image:"https://user-images.githubusercontent.com/109169835/204906976-d3f51e01-dd36-4442-b72f-792f480c30e2.png",
            title:"Conference",
            description:"Nam libero tempore, cum Soluta nobis est eligendi optio cumque",
        },
        {
            image:"https://user-images.githubusercontent.com/109169835/204906877-115fecd8-8e8a-4bd8-abc1-73eacb6b3749.png",
            title:"Conference",
            description:"Nam libero tempore, cum Soluta nobis est eligendi optio cumque",
        },
        {
            image:"https://user-images.githubusercontent.com/109169835/204906818-be5d2619-6137-4eed-bcb4-af2f82a1bce1.png",
            title:"Conference",
            description:"Nam libero tempore, cum Soluta nobis est eligendi optio cumque",
        }
    ],
    emptyMessage:"No data Available",
}
