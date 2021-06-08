## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the LetterAvatar Component
This is a resuasble component for dispalying the first character of a user's name in capital. This could be an alternative for the profile picture and stuffs. The Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {LetterAvatar} from "../components/LetterAvatar";`

## How to handle props to the component
```
<LetterAvatar name="scorelab" bgColor="blue" />
```

`name` prop is the name whose first charcter will be shown
`bgColor` prop is the custom prop which decides the backgound of letter avatar