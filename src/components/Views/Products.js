import React, { Component } from "react";
import axios from "axios";
import "./Products.css";

export default class Products extends Component {
  state = {
    products: [],
    productRemover: null,
    token: null,
    showFormEdit: false,
    productId: 0,
    isAdmin: true
  };
  // remove product
  handleProductRemove = async event => {
    event.preventDefault();

    const dataId = Number(
      event.target.parentElement.parentElement.getAttribute("data-id")
    );
    const productToRemove = this.state.products.filter(product => {
      return product.id === dataId ? product.id : false;
    });
    const productId = productToRemove[0]["id"];

    return await axios
      .delete(`http://localhost:1337/shoes/${productId}`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      })
      .then(res => {
        return res.status === 200 ? window.location.reload() : false;
      })
      .catch(err => {
        console.log(err, "Delete goes wrong !!!");
      });
  };
  // Handle Edit Product.
  handleProductEdit = async event => {
    event.preventDefault();
    const dataId = Number(
      event.target.parentElement.parentElement.getAttribute("data-id")
    );
    const productToEdit = this.state.products.filter(product => {
      return product.id === dataId ? product.id : false;
    });
    const productId = productToEdit[0]["id"];
    await this.setState(() => {
      return {
        productId: productId
      };
    });
    console.log(this.state.productId);
    // Handle Scroll to Form.
    this.handleScrollAndEditForm();
    // return await axios
    //   .put(
    //     `http://localhost:1337/shoes/${productId}`,
    //     {
    //       name: this.state.name,
    //       description: this.state.descritpion,
    //       store: this.state.store,
    //       isAvaible: this.state.isAvaible,
    //       price: this.state.price
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${this.state.token}`
    //       }
    //     }
    //   )
    //   .then(res => {
    //     return res.status === 200 ? window.location.reload() : false;
    //   })
    //   .catch(err => {
    //     console.log(err, "Delete goes wrong !!!");
    //   });
  };
  handleScrollAndEditForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // this.setState(() => {
    //   return {
    //     showFormEdit: !this.state.showFormEdit
    //   };
    // });
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const productsList = await axios
      .get("http://localhost:1337/shoes")
      .then(res => res.data)
      // Handle error.
      .catch(err => console.log(err, "Something goes wrong !"));
    this.setState(() => {
      return { products: productsList };
    });

    return await axios
      .post("http://localhost:1337/auth/local", {
        identifier: "grafuxa@gmail.com",
        password: "grafuxa@gmail.com"
      })
      .then(response => {
        // Handle success response.
        localStorage.setItem("token", response.data.jwt);
        const token = localStorage.getItem("token");
        this.setState(() => {
          return {
            token: token
          };
        });
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  }

  render() {
    return (
      <div>
        <h5 className="m5h">Products :</h5>

        <ul className="product__list">
          {this.state.products.map(item => (
            <div className="row4" key={item.id}>
              <div className="col s12">
                <div className="card" data-id={item.id}>
                  <div className="card-image margin-center">
                    <img
                      alt="productimage"
                      src="http://pluspng.com/img-png/shoe-hd-png-footwear-289.png"
                    />
                    <span className="card-title green darken-5 .center-align.">
                      {item.name}
                    </span>
                  </div>
                  <h5 className="product__id">id: {item.id}</h5>
                  <div className="card-content">
                    <p>{item.description}</p>
                  </div>
                  <div className="card-action">
                    <a href="/#" className=" button btn">
                      more
                    </a>
                    <a
                      href="/#"
                      className={
                        this.state.isAdmin ? " button btn red right" : "hide"
                      }
                      onClick={this.handleProductRemove}
                    >
                      remove
                    </a>
                    <a
                      href="/#"
                      className={
                        this.state.isAdmin
                          ? "button btn blue right m1h"
                          : "hide"
                      }
                      onClick={this.handleProductEdit}
                    >
                      edit
                    </a>
                  </div>
                  <div className="card-action card__size">
                    <div className="row">
                      <div className="col s6">
                        <span className="left  product__std-view">
                          store : <b> {item.store}</b>
                        </span>
                        <span className="left product__std-view">
                          price :
                          <b> {item.price ? item.price + "$" : "0 " + "$"}</b>
                        </span>
                      </div>
                      <div className="col s6">
                        <span className="right  product__std-view">
                          available :
                          <b> {item.isAvaible === 1 ? "yes" : "no"}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
