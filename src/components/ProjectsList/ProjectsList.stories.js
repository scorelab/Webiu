import React from 'react';

import { ProjectsList } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Projects/ProjectsList',
  component: ProjectsList,
  argTypes: {
     title: {control: 'text'},
     showSearchBar: {control: 'boolean'},
     searchPlaceHolder: {control: 'text'},
     items: {control: 'array'},
     limit: {control: 'number'},
     suffle: {control: 'boolean'}
  }
};

export const projectslist = (args) => <ProjectsList {...args} />

projectslist.args = {
   title: "Projects",
   showSearchBar: true,
   limit: 9,
   searchPlaceHolder: "Search Projects",
   suffle: false,
   items: [{title: "Bassa", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
            image: "https://scorelab.org/logos/projects/bassa.png", slug: "/basaa"},
           {title: "ASSET", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
            image: "https://scorelab.org/logos/projects/asset.png", slug: "/asset"},
           {title: "DroneSym", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
            image: "https://scorelab.org/logos/projects/dronesym.png", slug: "/dronesym"},
           {title: "Elly", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
            image: "https://scorelab.org/logos/projects/elly.png", slug: "/elly"},
           {title: "D4D", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
            image: "https://scorelab.org/logos/projects/d4d.png", slug: "/d4d"},
           {title: "Parks", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
            image: "https://scorelab.org/logos/projects/parks.png", slug: "/parks"}]
}