import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./Footer";

class Formation extends Component {
    render() {
        return (

            <section className="ligne" id="formation">
                <div className="container">
                    <h2>Formation</h2>
                </div>
                <div className="description-formation" id="description-formation">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> L'asso MIAGE a été fondée le 15 avril 1977 par trois étudiants de la formation Méthodes Informatiques Appliquées à la Gestion
                                    des Entreprises, à l'Université de Lille.
                                    <br/>
                                    Elle a vocation à faciliter la communication entre les étudiants,
                                    organiser des évènements et assurer la reconnaissance professionnelle
                                    de la formation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> Licence 3</p>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> Master 1</p>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> Master 2</p>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p>Formation en alternance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}

export default Formation;