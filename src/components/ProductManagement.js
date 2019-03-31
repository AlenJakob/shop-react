import React, { Component } from "react";
import axios from "axios";

class ProductManagement extends Component {
  state = {
    showFormAdd: false,
    showFormEdit: false,
    name: "",
    descritpion: "",
    store: 0,
    isAvaible: 1,
    price: 0
  };
  handleAddProduct = async () => {
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://localhost:1337/shoes",
        {
          name: this.state.name,
          description: this.state.descritpion,
          store: this.state.store,
          isAvaible: this.state.isAvaible,
          price: this.state.price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch(err => {
        console.log(err, "error <<");
      });
  };
  showFormAdd = () => {
    this.setState(() => {
      return { showFormAdd: !this.state.showFormAdd };
    });
  };
  handleProductName = event => {
    this.setState({
      name: event.target.value
    });
    // function for test state
    // this.toReadState();
  };
  handleProductDescritpion = event => {
    this.setState({
      descritpion: event.target.value
    });
  };
  handleProductStore = event => {
    this.setState({
      store: event.target.value
    });
  };
  handleProductPrice = event => {
    this.setState({ price: event.target.value });
  };
  //   end
  toReadState = () => {
    console.log("****************************");
    console.log("name :", this.state.name);
    console.log("price :", this.state.price);
    console.log("desc :", this.state.descritpion);
    console.log("store :", this.state.store);
    console.log("****************************");
  };
  componentDidMount = () => {};
  render() {
    return (
      <div>
        <button className="btn" onClick={this.showFormAdd}>
          add product
        </button>
        <form
          onSubmit={this.handleAddProduct}
          className={this.state.showFormAdd ? "" : "hide"}
        >
          <h5 className="m5">Product : </h5>
          <div className="container grey lighten-5 p2 z-depth-1">
            <div className="row ">
              <div className="input-field col s6">
                <input
                  id="first_name2"
                  type="text"
                  className="validate"
                  required
                  value={this.state.name}
                  onChange={this.handleProductName}
                />
                <label className="active" htmlFor="first_name2">
                  product name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  required
                  id="icon_prefix2"
                  className="materialize-textarea"
                  value={this.state.descritpion}
                  onChange={this.handleProductDescritpion}
                />
                <label htmlFor="icon_prefix2">product descritpion</label>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <input
                  id="store"
                  type="number"
                  className=""
                  value={this.state.store}
                  onChange={this.handleProductStore}
                />
                <label className="active" htmlFor="store">
                  store
                </label>
              </div>
              <div className="col s2">
                <input
                  id="store"
                  type="number"
                  min="1"
                  max="999"
                  value={this.state.price}
                  onChange={this.handleProductPrice}
                />
                <label className="active" htmlFor="store">
                  set price
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Available</span>
                  </label>
                </p>
              </div>
            </div>
            <button className="waves-effect waves-light btn">
              Add Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductManagement;
