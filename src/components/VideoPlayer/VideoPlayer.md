## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the VideoPlayer Component

This is a resuasble component for embedding video on websites. The video could be of any format. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {VideoPlayer} from "../components/VideoPlayer";`

## How to handle props to the component

```
<VideoPlayer width="560px" height="315px" videoSrcURL="video-url" title="sample-video-title" header="Video" />
```

`header` and `title` props are the title of the section and video
`height` and `width` props are the dimensions of the video
`videoSrcURL` prop is the source of the video to be played
