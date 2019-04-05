import React, { Component } from "react";
import ProductsList from "./ProductsList";
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
            <ProductsList />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPanel;
