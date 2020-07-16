import axios from "axios";
export const PRODUCTDETAIL_REQUEST = "PRODUCTDETAIL_REQUEST";
export const PRODUCTDETAILT_SUCCESS = "PRODUCTDETAIL_SUCCESS";
export const PRODUCTDETAIL_FAIL = "PRODUCTDETAIL_FAIL";
// product list
export const PRODUCTLISTDETAIL_REQUEST = "PRODUCTLISTDETAIL_REQUEST";
export const PRODUCTLISTDETAIL_SUCCESS = "PRODUCTLISTDETAIL_SUCCESS";
export const PRODUCTLISTDETAIL_FAIL = "PRODUCTLISTDETAIL_FAIL";
// product detail
export function productDetailRequestAction() {
  return {
    type: PRODUCTDETAIL_REQUEST,
  };
}
export function productDetailSuccessAction(data) {
  return {
    type: PRODUCTDETAILT_SUCCESS,
    data,
  };
}
export function productDetailFailAction(err) {
  return {
    type: PRODUCTDETAIL_FAIL,
    err,
  };
}
// PRODUCT LIST
export function productListRequestAction() {
  return {
    type: PRODUCTLISTDETAIL_REQUEST,
  };
}
export function productListSuccessAction(products) {
  return {
    type: PRODUCTLISTDETAIL_SUCCESS,
    products,
  };
}
export function productListErrorAction(errProductsList) {
  return {
    type: PRODUCTLISTDETAIL_FAIL,
    errProductsList,
  };
}
// product detail dispatch
export function productDetailAction(id) {
  return async (dispatch) => {
    dispatch(productDetailRequestAction());
    try {
      const result = await axios({
        method: "GET",
        url: `https://min-shop.herokuapp.com/rest/product/${id}`,
      });

      dispatch(productDetailSuccessAction(result.data));
    } catch (err) {
      dispatch(productDetailFailAction(err));
    }
  };
}
// product list dispatch
export function productListAction() {
  return async (dispatch) => {
    dispatch(productListRequestAction());
    try {
      const result = await axios({
        method: "GET",
        url: "https://min-shop.herokuapp.com/rest/product",
      });
      console.log(result);
      dispatch(productListSuccessAction(result.data.data));
    } catch (errProductList) {
      dispatch(productListErrorAction(errProductList));
    }
  };
}
