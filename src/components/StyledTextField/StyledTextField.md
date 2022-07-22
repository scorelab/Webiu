## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the StyledTextField Component

This is a resuasble component for textFields in the forms. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import StyledTextField from "../components/StyledTextField";`

## How to handle props to the component

```
<StyledTextField
    title="Name"
    placeholder="Set name"
    value={text}
    onChangeHandler={e => setText(e.target.value)}
/>
```

`title` prop is the title of the TextField component
`placeholder` prop is the placeholder for TextFiled
`value` prop is the current value in the TextField
`onChangeHandler` prop is the function that set the value in TextField component
