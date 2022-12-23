import React from "react"

import { SpeakerCard } from "./App"




export default {
    title: "General/SpeakerCardCard",
    component: SpeakerCard,
    argTypes: {
        title: { control: "text" },
        subText: { control: "text"},
        cardData: { control: "array"},
        emptyMessage: { control: "text"},
    },
}

export const speakerCard = args => <SpeakerCard {...args} />

speakerCard.args = {
    title: "Speakers",
    subText: "Meet Our Speakers",
    cardData: [
        {
            image:"https://i.ibb.co/tCsR9rn/img1.png",
            title:"Albert Barnes",
            designation:"Founder",

        },
        {
            image:"https://i.ibb.co/rG8Cfb0/Rectangle-26.png" ,
            title:"Albert Barnes",
            designation:"Founder",

        },
        {
            image:"https://i.ibb.co/tZSxZMn/Rectangle-27.png",
            title:"Albert Barnes",
            designation:"Founder",

        },
        {
            image: "https://i.ibb.co/86g8j6C/Rectangle-28.png",
            title:"Albert Barnes",
            designation:"Founder",

        },
        {
            image:"https://i.ibb.co/tHNgTKB/Rectangle-29.png",
            title:"Albert Barnes",
            designation:"Founder",

        },
        {
            image:"https://i.ibb.co/BcCd5D5/Rectangle-30.png",
            title:"Albert Barnes",
            designation:"Founder",

        },
    ],
    emptyMessage:"No data Available",
}
