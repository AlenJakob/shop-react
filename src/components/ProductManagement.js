import React, { Component } from "react";
import axios from "axios";
import NameInput from "./dataInputs/NameInput";
import DescriptionInput from "./dataInputs/DescriptionInput";
import StoreInput from "./dataInputs/StoreInput";
import PriceInput from "./dataInputs/PriceInput";
import Editform from "../utils/EditForm";
class ProductManagement extends Component {
  state = {
    showFormAdd: false,
    hideForm: false,
    name: "",
    descritpion: "",
    store: 0,
    isAvaible: 1,
    price: 0,
    currentId: 0
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
  showFormEdit = () => {
    this.setState(() => {
      return { hideForm: !this.state.hideForm };
    });
  };
  handleProductName = name => {
    this.setState({
      name
    });
    // function for test state
    // this.toReadState();
  };
  handleProductDescritpion = description => {
    this.setState({
      description
    });
  };
  handleProductStore = store => {
    this.setState({
      store
    });
  };
  handleProductPrice = price => {
    this.setState({ price });
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
  test = () => {
    console.log("TEST");
  };
  componentDidMount = () => {};
  render() {
    return (
      <div>
        <button className="btn" onClick={this.showFormAdd}>
          add product
        </button>
        <button className="btn m1h" onClick={this.showFormEdit}>
          show/hide edit
        </button>
        <Editform hideForm={this.state.hideForm} />
        <form
          //* this.handleAddProduct */
          onSubmit={
            this.state.showFormAdd ? console.log("yes") : console.log("no")
          }
          className={this.state.showFormAdd ? "" : "hide"}
        >
          <h5 className="m5">Product : </h5>
          <div className="container grey lighten-5 p2 z-depth-1">
            <div className="row ">
              <NameInput
                name={this.state.name}
                handleProductName={this.handleProductName}
              />
            </div>
            <div className="row">
              <DescriptionInput
                descritpion={this.state.descritpion}
                handleProductDescritpion={this.handleProductDescritpion}
              />
            </div>
            <div className="row">
              <PriceInput
                price={this.state.price}
                handleProductPrice={this.handleProductPrice}
              />
              <StoreInput
                store={this.state.store}
                handleProductStore={this.handleProductStore}
              />
            </div>
            <div className="row">
              <div className="col s6">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Available ( soon ) </span>
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
