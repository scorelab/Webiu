## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the OrderSummery Component

This is a resuasble component for the Order Summery Card. It is one of the most common things you will ever see in any e-commerce site. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import OrderSummery from "../components/OrderSummery";`

## How to handle props to the component

```
<OrderSummery items="5" total="250" navigationLink="/shipping" />
```

`items` prop is the items count in the cart.
`total` prop is the total amount of the items
`navigationLink` prop is the link which navigate after press the button
