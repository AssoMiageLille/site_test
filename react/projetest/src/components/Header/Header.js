import React, {Component} from "react";
import banniere from "../../../img/banniere.png";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "../Footer/Footer";

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={banniere} className="App-banniere" alt="banniere" width="200vh"/>
                    <h2>Asso MIAGE Lille</h2>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Header;