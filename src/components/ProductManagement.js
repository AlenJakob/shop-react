import React, { Component } from "react";
import axios from "axios";
import EditForm from "./utils/EditForm";
import AddForm from "./utils/AddForm";

class ProductManagement extends Component {
  state = {
    products: [],
    name: "",
    description: "",
    store: 0,
    isAvaible: 1,
    price: 0,
    hide: true,
    id: 0,
    token: ""
  };
  handleAddProduct = async e => {
    e.preventDefault();

    return await axios
      .post(
        "http://localhost:1337/shoes",
        {
          name: this.state.name,
          description: this.state.description,
          store: this.state.store,
          isAvaible: this.state.isAvaible,
          price: this.state.price
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          // window.location.reload();
          console.log(response.status);
          console.log(response);
        }
      })
      .catch(err => {
        console.log(err, "error <<");
      });
  };
  // Handle Edit Product.
  handleEditProduct = async event => {
    event.preventDefault();
    // const dataId = Number(
    //   event.target.parentElement.parentElement.getAttribute("data-id")
    // );
    // const productToEdit = await this.state.products.filter(product => {
    //   return product.id === dataId ? product.id : false;
    // });
    // const productId = productToEdit[0]["id"];
    // await this.setState(() => {
    //   return {
    //     id: this.state.id
    //   };
    // });
    // Handle Scroll to Form.
    // this.handleScrollToEditForm();
    return await axios
      .put(
        `http://localhost:1337/shoes/${this.state.id}`,
        {
          name: this.state.name,
          description: this.state.description,
          store: this.state.store,
          isAvaible: this.state.isAvaible,
          price: this.state.price
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        // return res.status === 200 ? window.location.reload() : false;
        console.log(res.status);
      })
      .catch(err => {
        console.log(err, "Edit goes wrong !!!");
      });
  };
  hideForm = () => {
    this.setState(() => {
      return {
        hide: !this.state.hide
      };
    });
    console.log(this.state.hide);
    this.setState(() => {
      return {
        name: "",
        description: "",
        store: "",
        isAvaible: "",
        price: ""
      };
    });
  };
  showFormAdd = () => {
    this.setState(() => {
      return { showFormAdd: !this.state.showFormAdd };
    });
  };
  showFormEdit = () => {
    this.setState(() => {});
  };
  handleProductName = name => {
    this.setState({
      name
    });
    // function to read actual state
    this.toReadState();
  };
  handleProductDescription = description => {
    this.setState({
      description
    });
    this.toReadState();
  };
  handleProductStore = store => {
    this.setState({
      store
    });
    this.toReadState();
  };
  handleProductPrice = price => {
    this.setState({ price });
    this.toReadState();
  };
  handleId = id => {
    this.setState({ id });
  };
  //   end
  toReadState = () => {
    console.log("****************************");
    console.log("name :", this.state.name);
    console.log("desc :", this.state.description);
    console.log("price :", this.state.price);
    console.log("store :", this.state.store);
    console.log("****************************");
  };
  test = () => {
    console.log("TEST");
  };
  componentDidMount = async () => {
    await this.setState(() => {
      return {
        token: localStorage.getItem("token")
      };
    });
    // window.onload = () => {
    //   once = () => {
    //     window.location.reload();
    //   };
    // };
  };

  render() {
    return (
      <div>
        <div className="center">
          {this.state.hide ? (
            <button className="btn m1h" onClick={this.hideForm}>
              edit product
            </button>
          ) : (
            <button className="btn m1h" onClick={this.hideForm}>
              add product
            </button>
          )}
        </div>

        <div className="row ">
          <AddForm
            className="col s6"
            handleAddProduct={this.handleAddProduct}
            add="Add Product"
            hide={this.state.hide}
            name={this.state.name}
            handleProductName={this.handleProductName}
            description={this.state.description}
            handleProductDescription={this.handleProductDescription}
            price={this.state.price}
            handleProductPrice={this.handleProductPrice}
            store={this.state.store}
            handleProductStore={this.handleProductStore}
          />

          <EditForm
            className="col s6"
            handleEditProduct={this.handleEditProduct}
            add="Edit Product"
            hide={this.state.hide}
            name={this.state.name}
            handleProductName={this.handleProductName}
            description={this.state.description}
            handleProductDescription={this.handleProductDescription}
            price={this.state.price}
            handleProductPrice={this.handleProductPrice}
            store={this.state.store}
            handleProductStore={this.handleProductStore}
            id={this.state.id}
            handleId={this.handleId}
          />
        </div>
      </div>
    );
  }
}

export default ProductManagement;
