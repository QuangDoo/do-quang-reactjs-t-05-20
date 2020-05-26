import React, { useState } from "react";
import "./App.css";
import Layout from "./components/layout/index";

import SideBar from "./components/Sidebar";
import Content from "./components/content";
import ProductItem from "./components/ProductItem";
import data from "./product.json";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const onSelectProduct = (newProduct) => {
    setProductsInCart([...productsInCart, newProduct]);
  };
  return (
    <Layout productsInCart={productsInCart}>
      <Content count={data.data.length}>
        {data.data.map((elm) => {
          return (
            <ProductItem
              {...elm}
              imageURL={elm.image}
              onSelectProduct={onSelectProduct}
              
            />
          );
        })}
      </Content>
      <SideBar />
    </Layout>
  );
}
export default App;
