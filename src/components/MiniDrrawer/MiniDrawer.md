## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the MiniDrawer Component

This is a reusable component for displaying the drawer for navigation. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import MiniDrawer from "../components/MiniDrawer";`

## How to handle props to the component

```
<MiniDrawer
    orgName="SCoRe Lab"
    navList={[
        { id: "1", url: "/", name: "Laboratories", icon: faFlask },
        { id: "2", url: "/bucket", name: "My Bucket", icon: faCartPlus },
        { id: "3", url: "/borrowings", name: "Borrowings", icon: faClock },
    ]}
/>
```

`orgName` prop is the name of the organization
`navList` prop is the list of navigation according to above format.
