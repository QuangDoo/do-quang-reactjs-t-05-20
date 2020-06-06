import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Main from "./Pages/Main";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
// import ProductDetail from "./Pages/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./Pages/pageNotFound";
import dataProduct from "./product.json";
import Loading from "./components/Loading";
const Main = React.lazy(() => import("./Pages/Main"));
const Login = React.lazy(()=> import("./Pages/Login"))
const Register = React.lazy(()=> import("./Pages/Register"))
const ProductDetail = React.lazy(()=> import("./Pages/ProductDetail"))
export const ThemeContext = React.createContext("light");

ReactDOM.render(
    <Router>
      <React.Suspense fallback={<Loading/>}>
      <ThemeContext.Provider value="black">
        <Switch>
          <Route exact path="/" component={Main} />

          <Route exact path="/(login|dang-nhap)" component={Login}/>
           
          {/* <Route exact path="/(register|dang-ky)">
            <Register />
          </Route> */}
          <Route exact path="/(register|dang-ky)" component={Register} />

          <Route exact path="/(product-detail|chi-tiet-san-pham)/:id" component={ProductDetail}/>
            
          {/* props render */}
          {/* <Route
            exact
            path="/(product-detail|chi-tiet-san-pham)/:id"
            render={(props) => {
              const product = dataProduct.data.find(
                (elm) => elm.id == props.match.params.id
              );
              if (!product) {
                return <PageNotFound />;
              } else {
                return (
                  <ProductDetail
                    name={product.name}
                    price={product.price}
                    priceMax={product.priceMax}
                    brand={product.brand}
                    productCode={product.productCode}
                    rewardPoint ={product.rewardPoint}
                    img={product.image}
                  />
                );
              }
            }}
          /> */}

          <Route>
            <PageNotFound path="*" />
          </Route>
        </Switch>
      </ThemeContext.Provider>
      </React.Suspense>
    </Router>
 ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
