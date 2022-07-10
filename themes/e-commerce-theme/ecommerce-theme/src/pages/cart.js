import React, { useContext } from "react"
import { CartContext } from "../contexts"
import CartTile from "../component/cart/cartTile"
import Layout from "../ui/layout"
import { addToCart, removeFromCart } from "../contexts/actions/cart-actions"

const Cart = () => {
  const { cart, dispatchCart } = useContext(CartContext)
  const subHandler = (id, img, qty, name, price) => {
    if (qty > 1) {
      dispatchCart(removeFromCart(id, img, 1, name, price))
    }
  }
  const addHandler = (id, img, qty, name, price, stock) => {
    if (qty < stock) {
      dispatchCart(addToCart(id, img, 1, name, price, stock))
    }
  }
  console.log(cart)
  const cartList = cart.map((item, i) => (
    <CartTile
      key={i}
      image={item.img}
      name={item.name}
      price={item.price}
      qty={item.qty}
      subtractionHandler={() =>
        subHandler(item.id, item.img, item.qty, item.name, item.price)
      }
      additionHandler={() =>
        addHandler(
          item.id,
          item.img,
          item.qty,
          item.name,
          item.price,
          item.stock
        )
      }
    />
  ))
  return <Layout>{cartList}</Layout>
}

export default Cart

// id: "0d22a4c1-8b07-5b3a-9501-ac7c0e7bf8c5"
// img: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyODM2MDg2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
// name: "Caps"
// price: 6
// qty: 4
// stock: 10
