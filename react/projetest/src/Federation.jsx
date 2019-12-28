import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class Federation extends Component {
    render() {
        return (

            <section className="ligne" id="formation">
                <Header/>
                <div className="container">
                    <h2>Nos fédérations</h2>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}

export default Federation;