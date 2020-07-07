export const GET_PRODUCT_FROM_CART = "GET_PRODUCT_FROM_CART";

export function getProductFromCartAction(product) {
  return {
    type: GET_PRODUCT_FROM_CART,
    product,
  };
}

