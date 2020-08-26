const { cardActionTypes } = require("./cart.types");

export const toogleCartHidden = () => ({
  type: cardActionTypes.TOOGLE_CART_HIDDEN,
});
