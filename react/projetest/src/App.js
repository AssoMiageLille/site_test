import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";


class App extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <p className="App-intro">
                 <h2>Bienvenue maman</h2>
            </p>
            <Footer></Footer>
      </div>

    );
  }
}

export default App;
