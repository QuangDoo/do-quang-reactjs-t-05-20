import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productsReducer from "./Pages/Main/Main.reducer";
import loginReducer from "./Pages/Login/Login.reducer";
import productDetailReducer from "./Pages/ProductDetail/ProductDetai.reducer";
import registerReducer from "./Pages/Register/Register.reducer";
import thunk from "redux-thunk";

const composedEnhancers = compose(applyMiddleware(...[thunk]),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
  combineReducers({
    productsReducer,
    loginReducer,
    productDetailReducer,
    registerReducer,
  }),
  {},
  composedEnhancers,
);

export default store;
