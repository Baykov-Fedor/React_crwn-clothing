const { cardActionTypes } = require("./cart.types");

export const toogleCartHidden = () => ({
  type: cardActionTypes.TOOGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: cardActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cardActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cardActionTypes.REMOVE_ITEM,
  payload: item,
});
