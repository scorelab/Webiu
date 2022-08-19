## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the FoodCard Component

This is a resuasble component for dispalying food item details such as name, image, description, price and availability. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import FoodCard from "../components/FoodCard";`

## How to handle props to the component

```
 <FoodCard
        imgUrl="https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NDYxNDYwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        title="Coke"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s."
        price="10"
        availability={true}
        />
```

`imgUrl`: prop is the url of the image
`title`: prop is the name of the food item
`description`: prop is the description about the item
`price`: prop is the price of the item
`availability`: prop is the boolean to indicate whether available or not
