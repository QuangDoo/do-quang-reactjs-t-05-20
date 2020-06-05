import React, { useState, useContext } from "react";
import "./Main.css";
import Layout from "../../components/layout";

import SideBar from "../../components/Sidebar";
import Content from "../../components/content";
import ProductItem from "../../components/ProductItem";
import data from "../../product.json";
import {ThemeContext} from "../../index";

function App() {
  const value = useContext(ThemeContext)
  const tempData = data.data;
  // state products
  const [productList, setProductsList] = useState(data.data);
  //add cart
  const [productsInCart, setProductsInCart] = useState([]);

  const AddProductToCart = (newProduct) => {
    let productCart = {
      id: newProduct.id,
      name: newProduct.name,
      type: newProduct.type,
      price: newProduct.price,
      imageURL: newProduct.imageURL,
      quantity: 1,
    };
    let productUpdate = [...productsInCart];
    let index = productUpdate.findIndex((pd) => pd.id === productCart.id);
    if (index !== -1) {
      productUpdate[index].quantity += 1;
    } else {
      productUpdate.push(productCart);
    }
    setProductsInCart(productUpdate);
  };
  const onHightToLow = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => product2.price - product1.price);
    console.log(newProducts);

    setProductsList(newProducts);
  };
  const onLowToHigh = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => {
      return product1.price - product2.price;
    });
    console.log(newProducts);

    setProductsList(newProducts);
  };
  const onSortAZ = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => {
      return product1.name
        .toLowerCase()
        .localeCompare(product2.name.toLowerCase());
    });
    console.log(newProducts);

    setProductsList([...newProducts]);
  };
  const onSortZA = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => {
      return product2.name
        .toLowerCase()
        .localeCompare(product1.name.toLowerCase());
    });
    console.log(newProducts);

    setProductsList(newProducts);
  };
  const onDelete = (productId) => {
    const deleteProduct = [...productsInCart].filter(
      (product) => product.id !== productId
    );
    setProductsInCart(deleteProduct);
  };
  const onSearch =(value)=>{
    console.log(value);
    
    const newProducts = [...data.data].filter(product=>{
      return product.name.includes(value)
    })
  setProductsList(newProducts);
  }
  return (
    <Layout productsInCart={productsInCart} onDelete={onDelete}>
      <main >
        <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
              <Content count={productList.length}>
                {productList.map((elm) => {
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
                onSearch={onSearch}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export default App;
