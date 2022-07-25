import React from "react"

import ShipmentDetail from "."

export default {
  title: "E-Commerce/ShipmentDetail",
  component: ShipmentDetail,
  argTypes: {
    initialState: { control: "object" },
    attributes: { control: "array" },
  },
}

export const shipmentDetail = args => <ShipmentDetail {...args} />

shipmentDetail.args = {
  initialState: {
    Name: "",
    Address: "",
    PostalId: "",
    MobileNumber: "",
    Email: "",
  },
  attributes: [
    { name: "Name", value: "Name" },
    { name: "Address", value: "Address" },
    { name: "PostalId", value: "Postal Id" },
    { name: "MobileNumber", value: "Mobile Number" },
    { name: "Email", value: "Email" },
  ],
}
