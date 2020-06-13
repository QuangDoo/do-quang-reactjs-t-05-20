export const PRODUCTDETAIL_REQUEST = "PRODUCTDETAIL_REQUEST";
export const PRODUCTDETAILT_SUCCESS = "PRODUCTDETAIL_SUCCESS";
export const PRODUCTDETAIL_FAIL = "PRODUCTDETAIL_FAIL";

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
