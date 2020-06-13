import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productsReducer from "./Pages/Main/Main.reducer";
import LoginReducer from "./Pages/Login/Login.reducer";
import ProductDetailReducer from "./Pages/ProductDetail/ProductDetai.reducer";
import RegisterReducer from "./Pages/Register/Register.reducer";
import thunk from "redux-thunk";
// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
console.log("productsReducer", productsReducer);
const composedEnhancers = compose(applyMiddleware(...[thunk]));
const store = createStore(
  combineReducers({
    productsReducer,
    LoginReducer,
    ProductDetailReducer,
    RegisterReducer,
  }),
  {},
  composedEnhancers
);

export default store;
