import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import "./css/charte.less" ;
import "./css/event.css";

class Event extends Component {
    render() {
        return (

        <div>
            <div>
                <h2> Nos évènements récurrents </h2>
            </div>
            <Container id="photos">
                <div className="container">
                    <Row>
                        <Col>
                            <img src="../img/amphi.png" title="Amphi" alt="Amphi" width="200vh"/>
                            <p>Amphi de présentation</p>
                        </Col>

                        <Col>
                            <img src="../img/jlmi.jpg" title="JLMI" alt="JLMI"  width="200vh"/>
                            <figcaption>Journée Lilloise de la MIAGE et de l'Informatique</figcaption>
                        </Col>

                        <Col>
                            <img src="../img/campuse.jpg" title="Campus en fête" alt="Campus en fête"/>
                            <figcaption>Campus en fête</figcaption>
                        </Col>

                        <Col>
                            <img src="../img/noel.jpg" title="Soirée de Noël" alt="Soirée de Noël"/>
                            <figcaption>Soirée de Noël</figcaption>
                        </Col>

                        <Col>
                            <img src="../img/election.jpg" title="election" alt="election"/>
                            <figcaption>Election du nouveau bureau</figcaption>
                        </Col>

                        <Col>
                            <img src="../img/laser.jpg" title="lasergame" alt="lasergame"/>
                            <figcaption>Laser Game</figcaption>
                        </Col>
                    </Row>

                </div>
            </Container>
            <Footer></Footer>
        </div>

        );
    }
}

export default Event;