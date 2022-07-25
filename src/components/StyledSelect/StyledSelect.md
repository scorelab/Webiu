## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the StyledSelect Component

This is a resuasble component for the show drop down list and select an item. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import StyledSelect from "../components/StyledSelect";`

## How to handle props to the component

```
<StyledSelect
    title="Country"
    value={country}
    dataList={[
        { key: "Sri Lanka", value: "Sri Lanka" },
        { key: "India", value: "India" },
        { key: "England", value: "England" },
    ]}
    onChangeHandler={e => setCountry(e.target.value)}
/>
```

`title` prop is the title of select component
`value` prop is the current selected item in the drop down list
`dataList` prop is the data list which used to show in drop down
`onChangeHandler` prop is the function that set the value in select component
