import React from "react"
import GitterRoomItem from "./GitterRoomItem"
import 'bootstrap/dist/css/bootstrap.css';
export default {
    title: "Gitter/GitterRoomItem",
    component: GitterRoomItem,
    argTypes: {
        name: { control: 'text' },
        avatarUrl: { control: 'text' },
        roomUrl: { control: 'text' },
        userCount: { control: 'text' },

    }
}
export const gitterRoomItem = (args) => <GitterRoomItem {...args} />;
gitterRoomItem.args = {
  "name": "scorelab/senz",
  "avatarUrl": "https://avatars-03.gitter.im/group/iv/4/57542d64c43b8c601977c479",
  "roomUrl": "https://gitter.im//scorelab/senz",
  "userCount": 59
}