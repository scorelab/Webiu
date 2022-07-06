import React from "react"

import CartTile from "."

export default {
  title: "E-Commerce/Cart",
  component: CartTile,
  argTypes: {
    image: { control: "text" },
    name: { control: "text" },
    price: { control: "text" },
    qty: { control: "text" },
  },
}

export const cartTile = args => <CartTile {...args} />

cartTile.args = {
  image: "https://scorelab.org/logos/projects/labellab.png",
  name: "Lorem",
  price: "19.99",
  qty: "5",
}
