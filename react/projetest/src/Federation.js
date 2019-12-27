import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./Footer";

class Federation extends Component {
    render() {
        return (

            <section className="ligne" id="formation">
                <div className="container">
                    <h2>Nos fédérations</h2>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}

export default Federation;