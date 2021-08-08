import React from 'react';

import { PublicationsList } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Achievements/PublicationsList',
  component: PublicationsList,
  argTypes: {
     title: {control: 'text'},
     items: {control: 'array'},
     limit: {control: 'number'},
     suffle: {control: 'boolean'},
     publications: {control: 'boolean'},
     achievements: {control: 'boolean'}
  }
};

export const publicationslist = (args) => <PublicationsList {...args} />

publicationslist.args = {
   title: "Research Journels",
   limit: 10,
   suffle: false,
   publications: true,
   achievements: false,
   items: [{title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
            authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/medal.svg", description: "Natonal Hackathon"},
           {title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
            authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/medal.svg", description: "Natonal Hackathon"},
           {title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
            authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/medal.svg", description: "Natonal Hackathon"},
           {title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
            authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/medal.svg", description: "Natonal Hackathon"}]
}