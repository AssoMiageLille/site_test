import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import "./css/charte.less" ;
import "./css/event.css";
//import amphi from "../img/amphi.png";
import laser from "../img/laser.jpg";
import election from "../img/election.jpg";
import noel from "../img/noel.jpg";
import campus from "../img/campus.jpg";
import jlmi from "../img/jlmi.jpg";


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
                        <Col className="lg-4">
                            <img src={jlmi} title="Journée Lilloise de la MIAGE et de l'Informatique" alt="JLMI" />
                        </Col>

                        <Col  className="lg-4">
                            <img src={campus} title="Campus en fête" alt="Campus en fête"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={noel} title="Soirée de Noël" alt="Soirée de Noël"/>
                        </Col>

                        <Col>
                            <img src={election} title="election" alt="election"/>
                        </Col>

                        <Col>
                            <img src={laser} title="lasergame" alt="lasergame"/>
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