import * as actionTypes from "./ProductItem.action";

const initState = {
  productInCart: [],
};
function ProductInCartReducer(state = initState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
      const newCart = [...state.productInCart];
      const index = newCart.findIndex(
        (product) => product.id === action.cartProduct.id
      );
      if (index >= 0) {
        newCart[index].quantity += 1;
      } else {
        newCart.push(action.cartProduct);
      }
      state.productInCart = newCart;
      return { ...state };
    }
    case actionTypes.DELETE_PRODUCT_CART: {
      const newCartDelete = [...state.productInCart].filter(
        (pd) => pd.id !== action.productDelete
      );
      state.productInCart = newCartDelete;
      console.log(newCartDelete);

      return { ...state };
    }
    default:
      return state;
  }
}

export default ProductInCartReducer;
