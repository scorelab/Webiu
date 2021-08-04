import React from 'react';

import { ImageGrid } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Images/ImageGrid',
  component: ImageGrid,
  argTypes: {
     header: {control: 'text'},
     images: {control: 'array'},
     size: {control: 'number'},
     categories: {control: 'boolean'},
     categoryData: {control: 'array'},
     row: {control: 'boolean'}
  }
};

export const imagegrid = (args) => <ImageGrid {...args} />

imagegrid.args = {
   size: 6,
   row: false,
   images: [{imageUrl: "https://scorelab.org/images/community.png", imageText: "SCoRe Lab"}, 
            {imageUrl: "https://scorelab.org/images/joinTeam.png", imageText: "OUR TEAM"}],
   categories: false,
   header: "Image Grid",
   categoryData: [{text: "Web Development", color: "#e52165", route: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/web-code.svg"},
                  {text: "Blockchain Tech", color: "#e52165", route: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/17-internet-network-technology/blockchain.svg"},
                  {text: "Machine Learning", color: "#e52165", route: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/17-internet-network-technology/neuromorphic-computing.svg"},
                  {text: "App Development", color: "#e52165", route: "/", image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/addon-extension.svg"}]
}