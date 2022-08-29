## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the VerticalStepper Component

This is a resuasble component for showing tasks in a stepper comonent in vertical direction. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import VerticalStepper from "../components/VerticalStepper";`

## How to handle props to the component

```
<VerticalStepper activeStep=0 stepsList=[{ name: "Step 1" }, { name: "Step 2" }, { name: "Step 3" }] onClickStepHandler= {()=>{console.log('function that handles the step logic')}} />
```

`activeStep` prop is the currently active step in vertical stepper component
`stepsList` prop is the data set for showing as steps
`onClickStepHandler` prop is the function which handles the logic of the vertical stepper component
