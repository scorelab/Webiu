## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Reviews Component

This is a resuasble component for showing the reviews for particular user. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {PublicationsList} from "../components/Reviews";`

## How to handle props to the component

When we pass publications list

```
<ReviewSection
    reviews=[
        {
        customerReview: "Great Service. 100%",
        date: "23/07/2022",
        issue: "There is a electrical work need to be done",
        },
        {
        customerReview: "Great Service. 100%",
        date: "22/07/2022",
        issue: "There is a wiring need to be done",
        },
    ]
/>
```

`reviews` prop is the list of review objects. Review object contains customerReview, data, issue fields
