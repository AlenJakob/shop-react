import React, { Component } from "react";
import Products from "./Products";
import ProductManagement from "../ProductManagement";

class AdminPanel extends Component {
  render() {
    return (
      <div className="container">
        <div className="row center">
          <h3>Admin panel site</h3>
          <h5>
            <b>product's:</b>
          </h5>
        </div>
        <div className="row">
          <ProductManagement />
        </div>
        <div className="row">
          <div className="col s12">
            <Products />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPanel;
