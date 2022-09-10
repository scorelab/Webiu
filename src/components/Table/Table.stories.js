import React from "react"

import DataTable from "."

export default {
  title: "InventoryManagementSystem/Table",
  component: DataTable,
  argTypes: {
    headerList: { control: "array" },
    dataList: { control: "array" },
  },
}

export const table = args => <DataTable {...args} />

table.args = {
  headerList: [
    { id: "1", header: "Item Id" },
    { id: "2", header: "Item Name" },
    { id: "3", header: "Laboratory" },
    { id: "4", header: "Issue Date" },
    { id: "5", header: "Due Date" },
  ],
  dataList: [
    {
      itemId: "I01",
      name: "Arduino Nano",
      lab: "CSE Level 1",
      issueDate: "02/09/2022",
      dueDate: "20/09/2022",
    },
    {
      itemId: "I02",
      name: "Arduino Nano",
      lab: "CSE Level 1",
      issueDate: "02/09/2022",
      dueDate: "20/09/2022",
    },
    {
      itemId: "I03",
      name: "Arduino Nano",
      lab: "CSE Level 1",
      issueDate: "02/09/2022",
      dueDate: "20/09/2022",
    },
  ],
}
