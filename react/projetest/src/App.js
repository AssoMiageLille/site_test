import React, { Component } from 'react';
import './css/App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import style from "./css/charte.less" ;


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
