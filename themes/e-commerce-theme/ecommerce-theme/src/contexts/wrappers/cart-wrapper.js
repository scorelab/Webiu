import React, { useReducer, createContext } from "react"
import CartReducer from "../reducers/cart-reducer"

export const CartContext = createContext()

const CartProvider = CartContext.Provider

export const CartWrapper = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem("cart"))
  const [cart, dispatchCart] = useReducer(CartReducer, storedCart || [])

  return <CartProvider value={{ cart, dispatchCart }}>{children}</CartProvider>
}
