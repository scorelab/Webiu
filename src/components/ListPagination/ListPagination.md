## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ListPagination Component

This is a resuasble component for the bottom list-pagination on a page with multiple data. This could be used to render data on differen t pages. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ListPagination} from "../components/ListPagination";`

## How to handle props to the component

```
<ListPagination pageSize={8} total={24} onChange={()=>{}} />
```

`pageSize` prop is the number of items e.g. cards, we wish to render per page
`total` prop is the total number of items
`onChange` prop is the function where the functional logic would go in for changing pages
