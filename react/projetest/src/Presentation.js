import React, {Component} from "react";
import trombi from "../img/trombi.png";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import "./css/charte.less" ;


class Presentation extends Component {
    render() {
        return (
            <section className="ligne" id="bureau">
                <div className="container">
                    <img src={trombi} alt="trombinoscope asso MIAGE Lille 2019" id="trombi" width="500vh"/>
                    <div id="bureau_desc">
                        <h2>Bureau 2019</h2>

                        <blockquote cite="https://dicocitations.lemonde.fr/">
                            <q>Se réunir est un début&nbsp;; rester ensemble est un progrès&nbsp;; travailler ensemble est
                                la réussite.</q>
                        </blockquote>
                        <cite>– Henry Ford</cite>

                    </div>
                </div>
            <Footer></Footer>
            </section>

        );
    }
}

export default Presentation;