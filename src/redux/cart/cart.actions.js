const { cardActionTypes } = require("./cart.types");

export const toogleCartHidden = () => ({
  type: cardActionTypes.TOOGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: cardActionTypes.ADD_ITEM,
  payload: item,
});
