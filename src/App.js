import React from "react";
import "./App.css";
import ProductsList from "./components/11-Introduce-ReacJS/lab1/Products-list";
import BaiTapLab2 from "./components/11-Introduce-ReacJS/lab2/bai-tap-lab2";
import Day12React from "./components/12-ReactJS-Basic-Concept/day-12-react";

function App() {
  function Img(props) {
    return <img src={props.imgURL} />;
  }
  function Name(props) {
    return <p>{props.name}</p>;
  }
  function Price(props) {
    return <p>{props.price}</p>;
  }
  function Sale(props) {
    return <p>{props.sale}</p>;
  }
  function SaleOff(props){
  return <span>{props.priceSaleOff}</span>
  }
  function Product(){
    return (
      <>
       <div className="card product">
        <Sale sale="sale" className="sale" />
        <Img imgURL="https://media3.scdn.vn/img4/2020/04_17/Jdpy7sL0W7vtZbhs7cvV_simg_b5529c_250x250_maxb.jpg" />
        <div className="card-body card__product-content">
          <h4 className="card-title card__product-type">Furniture</h4>
          <Name className="card-text card__product-name" name="Furniture" />
          <div className="card__product-price">
            <p>
              <span className="price-saleoff">
                <Price price="$199.00 USD" />
              </span>
              <span className="price">
                <strike><SaleOff priceSaleOff="$3000.00 USD"/></strike>
              </span>
            </p>
          </div>
        </div>
      </div>
      </>
      )
  }
  return (
    <div className="App">
      {/* <ProductsList />
      <BaiTapLab2 />
      <Day12React /> */}
     <Product/>
    </div>
  );
}

export default App;
