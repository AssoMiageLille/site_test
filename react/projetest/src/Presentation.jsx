import React, {Component} from "react";
import trombi from "./components/img/trombi.png";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class Presentation extends Component {
    render() {
        return (
            <section className="ligne" id="bureau">
                <Header/>
                <div className="container">
                    <div className = "col-lg-8 col-lg-offset-2" >
                        <p> L'asso MIAGE a été fondée le 15 avril 1977 par trois étudiants de la formation Méthodes Informatiques Appliquées à la Gestion
                            des Entreprises, à l'Université de Lille.
                            <br/>
                            Elle a vocation à faciliter la communication entre les étudiants,
                            organiser des évènements et assurer la reconnaissance professionnelle
                            de la formation.
                        </p>
                    </div>

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