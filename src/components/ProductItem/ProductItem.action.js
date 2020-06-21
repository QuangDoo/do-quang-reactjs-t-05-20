export const ADD_PRODUCT_TO_CART_REQUEST = "ADD_PRODUCT_TO_CART_REQUEST";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_FAIL = "ADD_PRODUCT_TO_CART_FAIL";

export function addProductToCartRequestAction() {
  return {
    type: ADD_PRODUCT_TO_CART_REQUEST,
  };
}
export function addProductToCartSuccesstAction(cartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    data: cartProduct
  };
}
export function addProductToCartFailAction(err) {
  return {
    type: ADD_PRODUCT_TO_CART_FAIL,
    error: err,
  };
}
export function addProductToCart(product) {
  console.log(product);
  return (dispatch) => {
    dispatch(addProductToCartRequestAction());
    if (product) {
      dispatch(addProductToCartSuccesstAction(product));
    } else {
      dispatch(addProductToCartFailAction());
    }
  };
  
}
