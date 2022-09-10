## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the RatingsCard Component

This is a reusable component for showing the ratings. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import RatingsCard from "../components/RatingsCard";`

## How to handle props to the component

```
<RatingsCard
    imgUrl= "https://images.unsplash.com/photo-1631049035182-249067d7618e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ5NDE4Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    userName= "Joe Doe",
    experience= "Good Experience",
    ratingValue= 2.5,
    details= [
        {
        id: "1",
        key: "Adults",
        value: "3",
        icon: faUser,
        },
        {
        id: "2",
        key: "Beds",
        value: "1",
        icon: faBed,
        },
        {
        id: "3",
        key: "Floor",
        value: "1",
        icon: faBuilding,
        },
    ],
/>
```
`imgUrl` prop is the url of the image
`userName` prop is the username
`experience` prop is the user experience about the hotel
`ratingValue` prop is the rating value which user gave
`details` prop is the list of more information
