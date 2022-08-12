## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ContributeBanner Component

This is a resuasble component for a display contirbuting on github in the form of banner. This could be used for improving partnership in any project. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ContributeBanner} from "../components/ContributeBanner";`

## How to handle props to the component

```
<ContributeBanner  mainText="sample-main-text" contributeText="sample-text" contributeLink="sample-link" gitBtnText="sample-text" gitBtnLink="sample-git-link"  image="sample-path" subText="sample-SubText" backgroundColor="sample" />
```

`image` prop is the path to the image
`mainText`, `subText` and few other props are texts to be passed
`bannerBackground` is the customized prop to decide bg-color of the section
`contributeText` and `gitBtnText` prop are the of the respected buttons
`contributeLink` and `gitBtnLink` are the links where we wish to navigate
