import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./action-types"

export const addToCart = (id, img, qty, name, price, stock) => ({
  type: ADD_TO_CART,
  payload: { id, img, qty, name, price, stock },
})

export const removeFromCart = (id, img, qty, name, price) => ({
  type: REMOVE_FROM_CART,
  payload: { id, img, qty, name, price },
})

export const clearCart = () => ({
  type: CLEAR_CART,
})
