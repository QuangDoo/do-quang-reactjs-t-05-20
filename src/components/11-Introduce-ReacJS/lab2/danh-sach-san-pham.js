import React, { Component } from "react";
import SanPham from "./san-pham";

class DanhSachSanPham extends Component {
  renderMangSanPham = () => {
    let { mangSanPham } = this.props;
    return mangSanPham.map((sanpham, index) => {
      return <SanPham key={index} product={sanpham}/>;
    });
  };
  
  render() {
    return <div className="container mt-5">
        <div className="row">
            {this.renderMangSanPham()}
        </div>
    </div>;
  }
}

export default DanhSachSanPham;
