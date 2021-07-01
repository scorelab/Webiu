## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the ComingSoon Component
This is a resuasble component for a generalized coming soon page. This could be used for the announcement and coutdowm of a new project or version. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {ComingSoon} from "../components/ComingSoon";`

## How to handle props to the component
```
<ComingSoon header="Countdown" image="image-path" buttonLink="/" countdownText="Coming soon!" 
            deployDate="1 Jan, 2022 00:00:00" buttonText="Explore" message="sample-text" />
```

`image` prop is the path to image
`header` is the title of the section
`buttonText` and `buttonLink` props are text and link of button
`deployDate` prop is the date whose coundown is needed
`countdownText` and `message` props are strings to be displayed