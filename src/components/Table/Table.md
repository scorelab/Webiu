## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the DataTable Component

This is a reusable component for Tables in the website. This Component is highly reusable and customizable via props.

## How to use the component

Import the component to `pages/index.js`
`import DataTable from "../components/Table";`

## How to handle props to the component

```
<DataTable headerList={HeaderList} dataList={DataList} />
```

`headerList` prop is the list of headers in the table. eg:- [{ id: "1", header: "Item Id" },{ id: "2", header: "Item Name" }]
`dataList` prop is the list of data in the table. eg:- [{
    itemId: "I01",
    name: "Arduino Nano",
    lab: "CSE Level 1",
    issueDate: "02/09/2022",
    dueDate: "20/09/2022",
  }]
