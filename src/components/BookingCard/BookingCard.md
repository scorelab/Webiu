## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the BookingCard Component

This is a resuasble component for dispalying rooms details such as image, name, description, price, more info and availability. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import BookingCard from "../components/BookingCard";`

## How to handle props to the component

```
    <BookingCard
        imgUrl="https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTc4NzgxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        title="Common Triple"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        roomId="1"
        moreInfoList={[
            { id: "1", icon: faDollar, key: "Price", value: "$90" },
            { id: "2", icon: faUser, key: "Adults", value: "3" },
            { id: "3", icon: faBuilding, key: "Floor", value: "1" },
            { id: "4", icon: faBed, key: "Beds", value: "1" },
        ]}
        availability={true}
    />
```

`imgUrl`: prop is the url of the image
`title`: prop is the header of the room 
`description`: prop is the description about the item
`moreInfoList`: prop is the list of more details to show.
`availability`: prop is the boolean to indicate whether available or not
