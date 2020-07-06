import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductInCart } from "../ProductItem/ProductItem.action";
import { quantityProductInCart } from "../ProductItem/ProductItem.action";
function Cart(props) {
  return (
    <li className="d-shop-cart">
      <a href="#">
        <i className="fas fa-shopping-cart" />
        <span className="cart-count">{props.productCart.length}</span>
      </a>
      <ul className="minicart">
        {props.productCart.map((element,index) => (
          <li key={element.id}>
            <div className="cart-img">
              <a href="#">
                <img src={element.imageURL} alt="" />
              </a>
            </div>
            <div className="cart-content">
              <h3>
                <a href="#">{element.name}</a>
              </h3>
              <div className="cart-price">
                <span className="new">Price: {element.price}</span>
                <span className="ml-4">
                  <del>{element.priceMax}</del>
                </span>
                <span onClick={()=>{props.quantityProductsInCart(index,false)}}>-</span>
                <span className="ml-2 mr-2">x{element.quantity}</span>
                <span onClick={()=>{props.quantityProductsInCart(index,true)}}>+</span>
              </div>
            </div>
            <div className="del-icon">
              <a>
                <i
                  className="far fa-trash-alt"
                  onClick={() => {
                    props.deleteProductInCart(element.id);
                  }}
                />
              </a>
            </div>
          </li>
        ))}

        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            <span className="f-right">
              {props.productCart.reduce((totalPrice, product) => {
                return (totalPrice += product.price * product.quantity);
              }, 0)}
            </span>
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <Link to="/shopping-cart">Shopping Cart</Link>
            <a className="red-color" href="#">
              Checkout
            </a>
          </div>
        </li>
      </ul>
    </li>
  );
}
const mapDispatchToProps = {
  deleteProductInCart: deleteProductInCart,
  quantityProductsInCart: quantityProductInCart,
};
const mapStateToProps = (state) => {
  return {
    productCart: state.productInCartReducer.productInCart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
