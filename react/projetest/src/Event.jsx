import React from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import "./css/event.css";
//import amphi from "../img/amphi.png";
import laser from "./components/img/laser.jpg";
import election from "./components/img/election.jpg";
import noel from "./components/img/noel.jpg";
import campus from "./components/img/campus.jpg";
import jlmi from "./components/img/jlmi.jpg";
import Header from "./components/Header/Header";


class Event extends React.Component {
    render() {
        return (

        <div>
            <Header/>
            <div>
                <h2> Nos évènements récurrents </h2>
            </div>
            <Container id="photos">
                <div className="container">
                    <Row>
                        <Col className="lg-3">
                            <img src={jlmi} title="Journée Lilloise de la MIAGE et de l'Informatique" alt="JLMI" />

                            <img src={campus} title="Campus en fête" alt="Campus en fête"/>

                            <img src={noel} title="Soirée de Noël" alt="Soirée de Noël"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={election} title="election" alt="election"/>

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