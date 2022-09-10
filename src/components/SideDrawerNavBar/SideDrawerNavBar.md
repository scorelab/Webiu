## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the SideDrawerNavBar Component

This is a resuasble component for showing navigation bar from the side of the web page. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import NavigationDrawer from "../components/NavigationDrawer";`

## How to handle props to the component

```
<NavigationDrawer
      navigationOptions={navigationOptions}
      open={open}
      resturentOptions={resturentOptions}
      hotelOptions={hotelOptions}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      backIconHandler={backIconHandler}
      brandName="Score Lab"
/>
```

`navigationOptions` prop is the list of navigation items. eg:- [{ id: "1", name: "Home", frontIcon: faHome, route: "/" },...]
`open` prop is the state of the drawer open or close
`resturentOptions` prop is the state of showing more details under Resturent navigation
`hotelOptions` prop is the state of showing more details under Hotel navigation
`handleDrawerOpen` prop is the function that set the open state to true
`handleDrawerClose` prop is the function that set the open state to false
`backIconHandler` prop is the function that manages the state of showing more navigation options under one navigation
`brandName` prop is the name of the title
