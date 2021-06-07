## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the Footer Component
This is a resuasble component for the footer of a website. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {Footer} from "../components/Footer";`

## How to handle props to the component
```
<Footer socialLinks={{facebook: "your_link", gitter: "your_link", twitter: "your_link", github: "your_link", 
                            linkedin:"your_link", medium:"your_link"}} mainText="Copyright © SCoRe Lab" />
```

`socialLinks` prop is the array of social media links you want to show in the footer
`mainText` prop is a string which is for any copyrigt text that you want to display, it dynamically shows the current year