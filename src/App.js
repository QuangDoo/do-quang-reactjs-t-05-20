import React from "react";
import "./App.css";
import Layout from "./components/layout/index";
import ProductsList from "./components/11-Introduce-ReacJS/lab1/Products-list";
import BaiTapLab2 from "./components/11-Introduce-ReacJS/lab2/bai-tap-lab2";
import Day12React from "./components/12-ReactJS-Basic-Concept/day-12-react";
import SideBar from "./components/Sidebar";
import Content from "./components/content";
import ProductItem from "./components/ProductItem";

const products = [
  {
    imgURL:
      "https://media3.scdn.vn/img4/2020/05_10/Yn4NdkX9RnEAew9JPipk_simg_b5529c_250x250_maxb.jpg",
    type: "Furniture",
    name: "Minimal Decor Furniture",
    price: "$199.00",
    disCountPrice: "$230.00",
  },
  {
    imgURL:
      "https://media3.scdn.vn/img4/2020/02_27/1CyQhihZtTbxzEoR6Gkx_simg_b5529c_250x250_maxb.jpg",
    type: "Furniture",
    name: "Minimal Decor Furniture",
    price: "$399.00",
    disCountPrice: "$430.00",
  },
  {
    imgURL:
      "https://media3.scdn.vn/img3/2019/10_21/NZBvuS_simg_b5529c_250x250_maxb.jpg",
    type: "Furniture",
    name: "Minimal Decor Furniture",
    price: "$999.00",
    disCountPrice: "$1099.00",
  },
];
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
function SaleOff(props) {
  return <span>{props.priceSaleOff}</span>;
}

function Product(props) {
  return (
    <>
      <div className="col-4">
        <div className="card product">
          <Sale sale={props.data.sale} className="sale" />
          <Img imgURL={props.data.imgURL} />
          <div className="card-body card__product-content">
            <h4 className="card-title card__product-type">Furniture</h4>
            <Name
              className="card-text card__product-name"
              name={props.data.name}
            />
            <div className="card__product-price">
              <p>
                <span className="price-saleoff">
                  <Price price={props.data.price} />
                </span>
                <span className="price">
                  <strike>
                    <SaleOff priceSaleOff={props.data.priceSaleOff} />
                  </strike>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//   return (
//     <div className="App">
//       {/* <ProductsList />
//       <BaiTapLab2 />
//       <Day12React /> */}
//       <div className="container">
//         <div className="row">
//           {products.map((elm) => {
//             return <Product data={elm} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <Layout>
      <Content count={products.length}>
        {
        products.map((elm) => {
          return <ProductItem {...elm} />;
        })
        }
      </Content>
      <SideBar />
    </Layout>
  );
}
export default App;
