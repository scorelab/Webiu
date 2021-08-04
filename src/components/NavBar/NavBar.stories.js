import React from 'react';

import { NavBar } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Home/NavBar',
  component: NavBar,
  argTypes: {
     logo: {control: 'text'},
     links: {control: 'array'},
     logoStyle: {control: 'object'}
  }
};

export const navbar = (args) => <NavBar {...args} />

navbar.args = {
   logo: "https://scorelab.org/logos/main-logo.jpeg",
   links: [{path: "/", isSpecial: false, isExternal: false, name: "Home"}, 
           {path: "/", isSpecial: false, isExternal: false, name: "Projects"}, 
           {path: "/", isSpecial: false, isExternal: false, name: "Publication"}, 
           {path: "/", isSpecial: false, isExternal: false, name: "Team"},
           {path: "/", isSpecial: false, isExternal: false, name: "Opportunities"}, 
           {path: "/", isSpecial: false, isExternal: false, name: "Blog"},
           {path: "/", isSpecial: false, isExternal: true, name: "GitHub"}, 
           {path: "/", isSpecial: true, isExternal: false, name: "GSoC 2022"}]
}