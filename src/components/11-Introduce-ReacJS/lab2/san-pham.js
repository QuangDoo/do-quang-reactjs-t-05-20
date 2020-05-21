import React, { Component } from "react";

class SanPham extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-4">
        <div className="container">
          <div className="card product">
            <p className="sale">SALE</p>
            <img
              className="card-img-top img-fluid card__product-img"
              src={product.img}
              alt=""
            />
            <div className="card-body card__product-content">
              <h4 className="card-title card__product-type">{product.type}</h4>
              <p className="card-text card__product-name">{product.name}</p>
              <div className="card__product-price">
                <p>
                  <span className="price-saleoff">{product.price}</span>
                  <span className="price">
                    <strike>{product.priceSaleOff}</strike>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SanPham;
