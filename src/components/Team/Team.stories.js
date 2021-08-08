import React from 'react';

import { Team } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Team/Team',
  component: Team,
  argTypes: {
     title: {control: 'text'},
     showSearchBar: {control: 'boolean'},
     heads: {control: 'array'},
     researchers: {control: 'array'},
     contributors: {control: 'array'},
     alumni: {control: 'array'}
  }
};

export const team = (args) => <Team {...args} />

team.args = {
   title: "Team Component",
   showSearchBar: true,
   heads: [{name: "Chathura Suduwella", title: "BSc Joint Major", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
           {name: "Charith Elvitigala", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}],
   contributors: [{name: "Chathura Suduwella", title: "BSc Joint Major", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
                  {name: "Charith Elvitigala", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
                  {name: "Namal Jayasuriya", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
                  {name: "Kasun De Zoysa", title: "SCoRe Contributor", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}],
   researchers: [{name: "Chathura Suduwella", title: "BSc Joint Major", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
                 {name: "Charith Elvitigala", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
                 {name: "Namal Jayasuriya", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}],
   alumni: [{name: "Chathura Suduwella", title: "BSc Joint Major", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
            {name: "Charith Elvitigala", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}, 
            {name: "Namal Jayasuriya", title: "BSc in Computer Science", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}]
}