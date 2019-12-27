import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./Footer";

class Event extends Component {
    render() {
        return (
        <div>
            <div>
                <h2> Nos évènements récurrents </h2>
            </div>
            <section className="ligne" id="photos">
                <div className="container">
                    <div id="picturesBoard">
                        <figure>
                            <img src="../img/amphi.png" title="Amphi" alt="Amphi"/>
                            <figcaption>Amphi de présentation</figcaption>
                        </figure>
                        <figure>
                            <img src="../img/jlmi.jpg" title="JLMI" alt="JLMI"/>
                            <figcaption>Journée Lilloise de la MIAGE et de l'Informatique</figcaption>
                        </figure>
                        <figure>
                            <img src="../img/campuse.jpg" title="Campus en fête" alt="Campus en fête"/>
                            <figcaption>Campus en fête</figcaption>
                        </figure>
                        <figure>
                            <img src="../img/noel.jpg" title="Soirée de Noël" alt="Soirée de Noël"/>
                            <figcaption>Soirée de Noël</figcaption>
                        </figure>
                        <figure>
                            <img src="../img/election.jpg" title="election" alt="election"/>
                            <figcaption>Election du nouveau bureau</figcaption>
                        </figure>
                        <figure>
                            <img src="../img/laser.jpg" title="lasergame" alt="lasergame"/>
                            <figcaption>Laser Game</figcaption>
                        </figure>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
        );
    }
}

export default Event;