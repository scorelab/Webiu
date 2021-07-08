## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Testimonial Component

This is a resuasble component for a testimonial component. This could be used for showing the reviews of users. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {Testimonial} from "../components/Testimonial";`

## How to handle props to the component

```
<Testimonial header="Testimonial"
             data={[{name: "sample", image: "sample-path", description: "sample", rating: "5"},
                    {name: "Sample", image: "sample-path", description: "sample", rating: "4"}]} />
```

`header` prop is the heading of the section
`data` prop is the array of testimonials of all data
