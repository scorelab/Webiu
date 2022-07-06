## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the CartTile Component

This is a resuasble component for displaying the items in the cart. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Card} from "../components/CartTile";`

## How to handle props to the component

```
<CartTile image="url of product" name="name of product" price="price of product" qty="Number of items per product" subtractionHandler={function for subtration icon} additionHandler={function for subtration icon} removeHandler={function for delete items}/>
```

`image` prop is the url of product
`name` prop is the name of product
`price` prop is the price of product
`qty` prop is the Number of items per product
`subtractionHandler` prop is the function for subtration icon
`additionHandler` prop is the function for subtration icon
`removeHandler` prop is the function for delete items
