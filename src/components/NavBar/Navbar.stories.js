import React from "react"
import NavBar from "./index"
import './style.sass';
export default {
    title: "NavBar",
    component: NavBar,
    argTypes: {

        logo: { control: 'text' },
        links: {
            control: {
                name: { control: 'text' },
                path: { control: 'text' },
                isExternal: { control: 'boolean' },
                isSpecial: { control: 'boolean' }
            }
        },
        logoStyle: { control: 'object' }
    }
}
export const navBar = (args) => <NavBar {...args} />;
navBar.args = {
    logo: "https://scorelab.org/logos/main-logo.jpeg",
    links: [{
        name: "Home",
        path: "Home",
        isExternal:false,
        isSpecial:true
    },{
        name: "About",
        path: "Home",
        isExternal:true,
        isSpecial:false
    }]
}