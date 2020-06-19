export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    data: product,
  };
}
