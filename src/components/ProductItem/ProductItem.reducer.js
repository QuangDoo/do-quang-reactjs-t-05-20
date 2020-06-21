import * as actionTypes from "./ProductItem.action";

const initState = {
  productInCart: [],
  loading: false,
  error: null,
};
function ProductInCartReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
      const newProduct = [...state.productInCart];
      const index = newProduct.findIndex(
        (product) => product.id === action.product.id
      );
      if (index >= 0) {
        newProduct[index] = {
          ...state.productInCart,
          quantity: newProduct[index].quantity + 1,
        };
      } else {
        state.productInCart = [...state.productInCart, { ...action.product }];
      }
      return { ...state, loading: false };
    }
    case actionTypes.ADD_PRODUCT_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default ProductInCartReducer;
