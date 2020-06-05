import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Pages/Main";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import ProductDetail from "./Pages/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./Pages/pageNotFound";

export const ThemeContext = React.createContext("light");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContext.Provider value="black">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/(login|dang-nhap)">
            <Login />
          </Route>
          <Route exact path="/(register|dang-ky)">
            <Register />
          </Route>
          <Route exact path="/(product-detail|chi-tiet-san-pham)">
            <ProductDetail />
          </Route>
          <Route>
            <PageNotFound path="*"/>
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
