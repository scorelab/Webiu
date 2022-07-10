import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { CartContext } from "../contexts"
import CartTile from "../component/cart/cartTile"
import OrderSummery from "../component/cart/orderSummery"
import Layout from "../ui/layout"
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../contexts/actions/cart-actions"

const Styles = makeStyles(theme => ({
  container: {
    width: "50%",
  },
  container2: {
    width: "25%",
  },
}))

const Cart = () => {
  const classes = Styles()
  let items = 0
  let total = 0
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
      removeHandler={() => dispatchCart(clearCart())}
    />
  ))
  cart.forEach(item => {
    items = items + item.qty
    total = total + item.qty * item.price
  })
  return (
    <Layout>
      <Grid container justifyContent="space-around">
        <Grid item classes={{ root: classes.container }}>
          {cartList}
        </Grid>
        <Grid item classes={{ root: classes.container2 }}>
          <OrderSummery items={items} total={total} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Cart
