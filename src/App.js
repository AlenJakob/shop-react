import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Views/Home";
import About from "./components/Views/About";
import Products from "./components/Views/Products";
import Help from "./components/Views/Help";
import Contact from "./components/Views/Contact";
import AdminPanel from "./components/Views/AdminPanel";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <div className=" container">
            <Route path="/products" component={Products} />
          </div>
          <Route path="/help" component={Help} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={AdminPanel} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
