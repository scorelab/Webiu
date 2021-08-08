import React from 'react';

import { GitterRoomsList } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/GitterRoomList',
  component: GitterRoomsList,
  argTypes: {
     title: {control: 'text'},
     gitterOrganizationName: {control: 'text'},
     groupId: {control: 'text'},
     gitterToken: {control: 'text'},
     small: {control: 'boolean'},
     limit: {control: 'number'}
  }
};

export const gitterroomlist = (args) => <GitterRoomsList {...args} />

gitterroomlist.args = {
    title: "Gitter Room List",
    gitterOrganizationName: "SCoRe Lab",
    groupId: "57542d64c43b8c601977c479",
    gitterToken: "4d6b01370f1f21d7314b96c21f31a28ea06d0c66",
    small: false,
    limit: 9
}