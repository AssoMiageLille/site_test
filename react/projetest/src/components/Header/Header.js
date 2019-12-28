import React, {Component} from "react";
import banniere from "../img/banniere.png";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import "../../css/header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={banniere} className="App-banniere" alt="banniere" width="200vh"/>
                <h2>Asso MIAGE Lille</h2>

                <nav className="navigation">
                    <Link classname="lien" to="/presentation"
                    >
                        Accueil
                    </Link>
                    <Link to="/formation"
                    >
                        La MIAGE
                    </Link>
                    <Link to="/event"
                    >
                        Nos évènements
                    </Link>
                    <Link to="/federation"
                    >
                        Nos fédérations
                    </Link>
                    <Link to="/contact"
                    >
                        Contactez-nous !
                    </Link>
                </nav>

            </div>
        );
    }
}

export default Header;