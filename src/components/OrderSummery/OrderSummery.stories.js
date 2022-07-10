import React from "react"

import OrderSummery from "."

export default {
  title: "E-Commerce/OrderSummery",
  component: OrderSummery,
  argTypes: {
    items: { control: "text" },
    total: { control: "text" },
    navigationLink: { control: "text" },
  },
}

export const orderSummeryCard = args => <OrderSummery {...args} />

orderSummeryCard.args = {
  items: "5",
  total: "350",
  navigationLink: "/shipping",
}
