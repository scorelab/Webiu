## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ShipmentDetail Component

This is a resuasble Shipment Detail component for the website. It can be used to fill the shipment details before the payment. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import ShipmentDetail from "../components/ShipmentDetail";`

## How to handle props to the component

```
<ShipmentDetail initialState={initialState object} attributes=[attributes array] />
```

`initialState` prop is the initial state of the ShipmentDetail component
eg:-
{
Name: "",
Address: "",
PostalId: "",
MobileNumber: "",
Email: "",
},
`attributes` prop is the list of attributes in the Shipment Detail comonent
eg:-
attributes: [
{ name: "Name", value: "Name" },
{ name: "Address", value: "Address" },
{ name: "PostalId", value: "Postal Id" },
{ name: "MobileNumber", value: "Mobile Number" },
{ name: "Email", value: "Email" },
],

Here each attribute name and initial state value is equal because state of this component is handle dynamically
