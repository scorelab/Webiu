import React from "react"
import GitterRoomsList from "./index"
import 'bootstrap/dist/css/bootstrap.css';
export default {
    title: "Gitter/GitterRoomsList",
    component: GitterRoomsList,
    argTypes: {
        title: { control: 'text' },
        gitterOrganizationName: { control: 'text' },
        gitterToken: { control: 'text' },
    }
}
export const gitterRoomsList = (args) => <GitterRoomsList {...args} />;
gitterRoomsList.args = {
    "title": "scorelab Gitter",
    "gitterOrganizationName": "scorelab",
    "gitterToken": "sample",

}