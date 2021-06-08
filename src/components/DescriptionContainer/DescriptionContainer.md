## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the DescriptionContainer Component
This is a resuasble component for dispalying detailed information or description of any topic. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {DescriptionContainer} from "../components/DescriptionContainer";`

## How to handle props to the component
```
<DescriptionContainer title="Title" subTitle="SubTitle"
                          image="https://scorelab.org/images/community.png"
                          mainText="Your main text here"
                          sideComponent={{content: "content of side component"}}/>
```

`title` prop is the title of your description
`subTitle` prop is the sub-title for your description
`image` is the path to image of your description
`mainText` is the detailed description you need to pass
`sideComponent` is the bifurcation of screen and is optional for any further content to be added