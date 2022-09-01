## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the BreadcrumbsWrapper Component

This is a reusable component for navigate between pages. This Component is highly reusable and customizable

## How to use the component

Import the component to `pages/index.js`
`import BreadcrumbsWrapper from "../components/Breadcrumbs";`

## How to handle props to the component

```
<BreadcrumbsWrapper elementList=[{ name: "Labs", url: "/" }, { name: "Categories" }] />
```

`elementList` prop is the list of navigation options. items in the list following this signature
