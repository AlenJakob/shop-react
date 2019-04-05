import React, { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="container" onSubmit={e => this.props.LogIn(e)}>
        <div className="row login__form ">
          <div className=" grey lighten-5 p3 z-depth-1">
            <input
              id="username"
              type="text"
              onChange={e => this.props.handleUsername(e.target.value)}
            />
            <label htmlFor="username">First Name</label>
            <input
              id="pwd"
              type="password"
              onChange={e => this.props.handlePwd(e.target.value)}
            />
            <label htmlFor="pwd">First Name</label>
            <div className="row m2v">
              <button className="btn col s12 waves-effect waves-light">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
