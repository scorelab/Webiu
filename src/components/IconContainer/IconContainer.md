## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Icon Container Component

This is a resuasble component for displaying card details with icons. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import IconContainer from "../components/IconContainer";`

## How to handle props to the component

```
<IconContainer iconName={faUsers} subject="Subject" name="Name" year="2022" participantsCount="100" memberText="Members" moduleCount="8" moduleText="Modules" onClickHandler={()=>{console.log("function called")}} />
```

`iconName` prop is the fontawesome icon name which showing in header
`subject` prop is the name of subject
`name` prop is the name of the coordinator
`year` prop is the year
`participantsCount` prop is the number of participants
`memberText` prop is the title for `participantsCount`
`moduleCount` prop is the number of modules
`moduleText` prop is the title for `moduleCount`
`onClickHandler` prop is the onClick handler function
