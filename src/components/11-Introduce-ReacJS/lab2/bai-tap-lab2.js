import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";

export default class BaiTapLab2 extends Component {
  mangSanPham = [
    {
      img: "./img/vsphone.jpg",
      type: "Furniture",
      name: "Minimal Decor Furniture",
      price: "$199.00",
      priceSaleOff: "$230.00",
    },
    {
      img: "./img/meizuphone.jpg",
      type: "Furniture",
      name: "Minimal Decor Furniture",
      price: "$399.00",
      priceSaleOff: "$430.00",
    },
    {
      img: "./img/applephone.jpg",
      type: "Furniture",
      name: "Minimal Decor Furniture",
      price: "$999.00",
      priceSaleOff: "$1099.00",
    },
  ];
  render() {
    return (
      <div>
        <DanhSachSanPham mangSanPham={this.mangSanPham} />
      </div>
    );
  }
}
