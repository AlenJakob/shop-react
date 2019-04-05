import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../components/Views/Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoggedIn: localStorage.getItem("isLoggedIn") ? true : false,
    token: localStorage.getItem("token")
  };
  handleLogout = e => {
    e.preventDefault();
    console.log("logout function run");
    localStorage.removeItem("isLoggedIn");
    return this.props.history.push("/home");
  };
  componentDidMount = () => {
    console.log("token ", this.state.token);
    console.log(" ", this.state.isLoggedIn);
    console.log(this.props);
  };
  render() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(this.state.isLogged);
    return (
        <nav>
          <div className="nav-wrapper cyan darken-5">
            <a href="/#" className="brand-logo left">
              Logo
            </a>
            <ul className="right">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {isLoggedIn ? (
                (
                 <span>
                 <li>
                    <NavLink  to="/account">Account( admin )</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={this.handleLogout} to="/">Logout</NavLink>
                    <h6>{isLoggedIn ? "(username)" : ""}</h6>
                  </li>
                 </span>
                )
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
    );
  }
}
export default withRouter(Navbar);
