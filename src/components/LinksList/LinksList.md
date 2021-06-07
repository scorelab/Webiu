## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the LinksList Component
This is a resuasble component for displaying the list of links in bullet points. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {LinksList} from "../components/LinksList";`

## How to handle props to the component
```
<LinksList links={[{"name": "Sample1", "url": "https://google.com"},
                        {"name": "Sample2", "url": "https://google.com"},
                        {"name": "Sample3", "url": "https://google.com"},]} isIcon={true} iconName="faLink" />
```


`links` prop is the array of links you want to render
`isIcon` prop is a boolean to decide if you will render icons or not
`iconName` is the name of icon you want to render