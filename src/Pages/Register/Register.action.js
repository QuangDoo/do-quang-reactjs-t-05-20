export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export function registerRequestAction() {
  return {
    type: REGISTER_REQUEST,
  };
}
export function registerSuccessAction(token) {
  return {
    type: REGISTER_REQUEST,
    token,
  };
}
export function registerFailAction(err) {
  return {
    type: REGISTER_REQUEST,
    err,
  };
}
