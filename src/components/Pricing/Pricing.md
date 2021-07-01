## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Pricing Component

This is a resuasble component for the Pricing section of a website. It can be widely used to give more information regarding various monetary plans. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Pricing} from "../components/Pricing";`

## How to handle props to the component

```
<Pricing title="Subscription Charges" header="Pricing" description="sample-description"
         plans={[{plan: "BASIC", description: "sample", price: 30, items: ["Lorem Ipsum Text" buttonText: "Explore", buttonLink: "/"},
                {plan: "ADVANCE", description: "sample", price: 40, items: ["Lorem Ipsum Text"], buttonText: "Explore", buttonLink: "/"},
                {plan: "PRO", description: "sample", price: 50, items: ["Lorem Ipsum Text"], buttonText: "Explore", buttonLink: "/"}]} />
```

`title` prop is the title of the section
`header` prop is the heading of the pricing section
`description` prop is the description string
`plans` prop is the array of details of each cards of the pricing
