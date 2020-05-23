import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-4">
          <div className="card product">
            <p className="sale">SALE</p>
            <img
              className="card-img-top card__product-img"
              src="https://badova.net/wp-content/uploads/2019/09/ghe-an-cafe-Cherry.jpg"
              alt=""
            />
            <div className="card-body card__product-content">
              <h4 className="card-title card__product-type">Furniture</h4>
              <p className="card-text card__product-name">
                Minimal Decor Furniture
              </p>
              <div className="card__product-price">
                <p>
                  <span className="price-saleoff">$119.00</span>
                  <span className="price">
                    <strike>$230.00</strike>
                  </span>
                </p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default ProductItem;
