import React, { Component } from "react";
import LoginForm from "../utils/LoginForm";
import { Route, Redirect } from "react-router";

class Login extends Component {
  state = {
    username: "",
    pwd: "",
    adminLogin: "admin",
    adminPwd: "admin",
    redirect: false,
  };
  redirectSuccess = () => {
    if (
      this.state.username === this.state.adminLogin &&
      this.state.pwd === this.state.adminPwd
    ) {
      console.log("Passed");
      this.props.history.push("/account") &&
        this.setState({ redirect: true });
      const loggedIn = localStorage.setItem("isLoggedIn", true);
    } else {
      console.log("Failed in redirect function");
      this.props.history.push("/login/error");
    }
    // return this.props.history.push("/account");
  };
  redirectFailure = () => {
    console.log("Failed func");
    localStorage.removeItem("isLoggedin");
    const error = `<h1>Error</h1>`;
    this.setState({ redirect: false});
    console.log(this.state.isLoggedIn);
    // return this.props.history.push("/login");
  };
  LogIn = e => {

    console.log(this.state.redirect);
    // this.setState({ redirect: true });
    e.preventDefault();
    // return this.state.username === this.state.adminLogin &&
    //   this.state.pwd === this.state.adminPwd
    !this.state.redirect ? this.redirectSuccess() : this.redirectFailure();
  };
 
  handleUsername = username => {
    this.setState({
      username
    });
    this.test();
  };
  handlePwd = pwd => {
    this.setState({
      pwd
    });
    this.test();
  };
  componentDidMount = () => {
      console.log(this.props.isLoggedIn);
      
  };
  test = () => {
    console.log("-----------------------");
    console.log(" username :", this.state.username);
    console.log(" pwd :", this.state.pwd);
    console.log("-----------------------");
  };
  handleError = () => {};
  render() {
    return (
      <div>
        <h4 className="center m5h">Login</h4>
        <LoginForm
          handleUsername={this.handleUsername}
          handlePwd={this.handlePwd}
          LogIn={this.LogIn}
          redirectFailure={this.redirectFailure}
          redirectSuccess={this.redirectSuccess}
          redirect={this.state.redirect}
        />
      </div>
    );
  }
}

export default Login;
