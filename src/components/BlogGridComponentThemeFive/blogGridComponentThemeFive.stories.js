import React from "react";
import { BlogGridThemeFive } from "./index";
import "bootstrap/dist/css/bootstrap.css"

export default {
    title: "theme 5/blogGridComponentThemeFive",
    component: BlogGridThemeFive,
    argTypes: {
        heading: { control: "text" },
        cardItems: { control: "array" },
    }
}

export const blogGrid=args=> <BlogGridThemeFive {...args} />

blogGrid.args={
    heading:"Our Latest Blogs",
    cardItems:[
        {   img:"https://i.ibb.co/BrCtNdj/Rectangle-42.png",
            cardHead:"Los Angeles Institute",
            cardPara:"Street Food Convention will showcase products like Packed food, beef and lamb, street food."
        },
        {   img:"https://i.ibb.co/7twyrrL/Rectangle-43.png",
            cardHead:"Los Angeles Institute",
            cardPara:"Street Food Convention will showcase products like Packed food, beef and lamb, street food."
        },
        {   img:"https://i.ibb.co/VJCmpYk/Rectangle-44.png",
            cardHead:"Los Angeles Institute",
            cardPara:"Street Food Convention will showcase products like Packed food, beef and lamb, street food."
        },
    ]
}

