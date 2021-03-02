import React from "react"
import DescriptionContainer from "./index"
import 'bootstrap/dist/css/bootstrap.css';
export default {
    title: "DescriptionContainer",
    component: DescriptionContainer,
    argTypes: {
        title: { control: 'text' },
        image: { control: 'text' },
        mainText: { control: 'text' },
        sideComponent: { control: 'object' }


    }
}
export const descriptioncontainer = (args) => <DescriptionContainer {...args} />;
descriptioncontainer.args = {
    title: "SCoRe Community",
    image: "https://scorelab.org/images/joinTeam.png",
    mainText: "The SCoRe Lab has conducted research covering various aspects of sensor networks,",

}