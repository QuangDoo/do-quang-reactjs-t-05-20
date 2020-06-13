export const LOGIN_REQUEST = "LOGIN_REQUEST"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST,
  };
}
export function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}
export function loginFailAction(err) {
  return {
    type: LOGIN_FAIL,
    err,
  };
}
