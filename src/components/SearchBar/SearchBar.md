## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Search Bar Component

This is a resuasble search bar component for the website. It can be used to filter and serach any results on the corresponding pages. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {SearchBar} from "../components/SearchBar";`

## How to handle props to the component

```
<SearchBar handleSearch={() => console.log("Hello")} placeHolder="Search Items" header="Search Bar" />
```

`handleSearch` prop is the function which defines what the search bar does
`placeHolder` prop is the placeholder string which is written on input box
`header` prop is optional, it displays the name of the section
