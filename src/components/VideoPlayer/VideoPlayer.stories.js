import React from 'react';

import { VideoPlayer } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'General/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
     videoSrcURL: {control: 'text'},
     title: {control: 'text'},
     header: {control: 'text'},
     width: {control: 'text'},
     height: {control: 'text'}
  }
};

export const videoplayer = (args) => <VideoPlayer {...args} />

videoplayer.args = {
   videoSrcURL: "https://www.youtube.com/embed/GuvAMcsoreI",
   header: "Video", 
   title: "Gatsby Js Video Tutorial",
   width: "350px",
   height: "215px"
}