export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const QUANTITY_PRODUCT_CART = "QUANTITY_PRODUCT_CART";
export function addProductToCartSuccesstAction(cartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    cartProduct,
  };
}
export function deleteProductInCartAction(productDelete) {
  return {
    type: DELETE_PRODUCT_CART,
    productDelete,
  };
}
export function quantityProductInCartAction(index, isQuantity) {
  return {
    type: QUANTITY_PRODUCT_CART,
    index,
    isQuantity,
  };
}
export function addProductToCart(product) {
  console.log(product);
  
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
export function deleteProductInCart(productId) {
  console.log(productId);

  return (dispatch) => {
    dispatch(deleteProductInCartAction(productId));
  };
}
export function quantityProductInCart(index, isQuantity) {
  console.log(index);
  
  return (dispatch) => {
    dispatch(quantityProductInCartAction(index, isQuantity));
  };
}
