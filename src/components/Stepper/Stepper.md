## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Stepper Component

This is a resuasble component for the milestones of a task. It provides a wizard-like workflow. This Component is highly reusable and customizable via props even the colors and text

## How to use the component

Import the component to `pages/index.js`
`import {Stepper} from "../components/Stepper";`

## How to handle props to the component

```
<Stepper direction="horizontal" currentStep={2} steps={["Fork the Project", "Clone the Repo", "Local Setup"]} />
```

`direction` prop is the direction of stepper, horizontal or vertical. Horizonatal specific to laptop screen, vertical to all
`currentStep` prop is index upto which progress has been made
`steps` prop is the array of strings of milestones to be completed
