export const ADD_PRODUCT_TO_CART_REQUEST = "ADD_PRODUCT_TO_CART_REQUEST";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_FAIL = "ADD_PRODUCT_TO_CART_FAIL";

export function addProductToCartSuccesstAction(cartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    cartProduct,
  };
}

export function addProductToCart(product) {
  const cartProduct = {
    id: product.id,
    name: product.name,
    type: product.type,
    price: product.price,
    imageURL: product.imageURL,
    quantity: 1,
  };
  return (dispatch) => {
    dispatch(addProductToCartSuccesstAction(cartProduct));
  };
}
