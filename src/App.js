import React, { useState } from "react";
import "./App.css";
import Layout from "./components/layout/index";

import SideBar from "./components/Sidebar";
import Content from "./components/content";
import ProductItem from "./components/ProductItem";
import data from "./product.json";

function App() {
  //add cart
  const [productsInCart, setProductsInCart] = useState([]);
  //sort price high to low
  const [productsSort, setProductsSort] = useState(data.data);
  //sort price low to high
  const [productsLow, setproductsLow] = useState(data.data);
  // sort A-Z
  const [productAZ, setProductAZ] = useState(data.data);

  const AddProductToCart = (newProduct) => {
    let productCart = {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
      imgURL: newProduct.imgURL,
      quantity: 1,
    };
    let productUpdate = [...productsInCart];
    let index = productUpdate.findIndex((pd) => pd.id === productCart.id);
    if (index !== -1) {
      productUpdate[index].soLuong += 1;
    } else {
      productUpdate.push(productCart);
    }
    setProductsInCart(productUpdate);
  };
  const onHightToLow = () => {
    let newProducts = [...productsSort];
    newProducts.sort((product1, product2) => product2.price - product1.price);
    console.log(newProducts);

    setProductsSort(newProducts);
  };
  const onLowToHigh = () => {
    let newProducts = [...productsLow];
    newProducts.sort((product1, product2) => {
      return product1.price - product2.price;
    });
    console.log(newProducts);

    setproductsLow(newProducts);
  };
  const onSortAZ = () => {
    let newProducts = [...productAZ];
    newProducts.sort((product1, product2) => {
      return product1.name
        .toLowerCase()
        .localeCompare(product2.name.toLowerCase());
    });
    console.log(newProducts);
    
    setProductAZ(newProducts);
  };
  const onSortZA = () => {
    let newProducts = [...productAZ];
    newProducts.sort((product1, product2) => {
      return product2.name
        .toLowerCase()
        .localeCompare(product1.name.toLowerCase());
    });
    console.log(newProducts);
    
    setProductAZ(newProducts);
  };
  return (
    <Layout productsInCart={productsInCart}>
      <Content sortHighLow={productsSort} count={data.data.length}>
        {data.data.map((elm) => {
          return (
            <ProductItem
              {...elm}
              imageURL={elm.image}
              onAddProduct={AddProductToCart}
            />
          );
        })}
      </Content>
      <SideBar
        onSort={onHightToLow}
        onSortLow={onLowToHigh}
        onSortAZ={onSortAZ}
        onSortZa={onSortZA}
      />
    </Layout>
  );
}
export default App;
