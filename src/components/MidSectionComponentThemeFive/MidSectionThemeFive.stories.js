import React from "react";
import { MidSectionThemeFive } from "./index";
import "bootstrap/dist/css/bootstrap.css"

export default{
    title:"theme 5/midSectionComponentThemeFive",
    component:MidSectionThemeFive,
    argTypes:{
        mainText:{control:"text"},
        mainHead:{control:"text"},
        mainPara:{control:"text"},
        button:{control:"text"},
        img:{control:"text"},
        secondSubHead:{control:"text"},
        secondSubHead:{control:"text"},
        countItems:{control:"array"},
    }
}

export const midThemeFive=args=> <MidSectionThemeFive {...args} />

midThemeFive.args={
    mainText:"About Conference",
    mainHead:"WELCOME TO THE PROJECT MANAGEMENT",
    mainPara:"The Project Management is a platform to learn expert techniques for building successful project teams, creating efficient plans and implementing effective tracking measures to ensure your projects come in on deadline and on budget. In one fast-paced, well-designed day, we’ll cover all the essential elements of project management.",
    button:"Interested",
    img:"https://i.ibb.co/dBzsTZP/Untitled-design.png",
    secondHead:"CONFERENCE DATE",
    secondSubHead:"COUNT EVERY SECOND UNTIL THE EVENT",
    countItems:[
        {
            time:"00",
            duration:"MONTHS"
        },
        {
            time:"00",
            duration:"DAYS"
        },
        {
            time:"00",
            duration:"HOURS"
        },
        {
            time:"00",
            duration:"MINUTES"
        },
        
    ]
}