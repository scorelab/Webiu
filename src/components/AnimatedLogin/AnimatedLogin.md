## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the AnimatedLogin Component

This is a reusable component for the Login page with animated background and typewriter. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import AnimatedLogin from "../components/AnimatedLogin";`

## How to handle props to the component

```
<Login
    name="SCoRe Labs"
    typeWriteWords={["Effective", "Simple", "Elegant"]}
    typeWriterHeader="SCoRe Lab is"
    submitHandler={() => {}}
/>
```

`name` props is the name of organization
`typeWriteWords` prop is the word list for typewriter
`typeWriterHeader` prop is the static set of words before typewriter
`submitHandler` prop is the function which trigger after press the login button
