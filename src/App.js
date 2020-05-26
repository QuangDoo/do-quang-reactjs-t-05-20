import React, { useState } from "react";
import "./App.css";
import Layout from "./components/layout/index";

import SideBar from "./components/Sidebar";
import Content from "./components/content";
import ProductItem from "./components/ProductItem";
import data from "./product.json";
/* 
1. Lay duoc su kien click cua icon add to cart
2. Tao 1 array ( productsInCart) cho nhung sp trong cart useState
3. Dua sp ma dang click ra ngoai de add vao productsInCart
4. Boi vi productsInCart se thay doi nen minh se tao productsInCart bang cach dung useState
4. Truyen productsInCart vao cart de lay danh sach sp va hien thi trong Cart
*/
function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const onSelectProduct = (newProduct)=>{
    setProductsInCart([...productsInCart,newProduct])
  }
  return (
    <Layout productsInCart={productsInCart}>
      <Content count={data.data.length}>
        {data.data.map((elm) => {
          return <ProductItem {...elm} imageURL={elm.image} onSelectProduct={onSelectProduct}/>;
        })}
      </Content>
      <SideBar />
    </Layout>
  );
}
export default App;
