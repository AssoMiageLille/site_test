import React, {Component} from "react";
import banniere from "../img/banniere.png";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import "../../css/header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="haut">
                    <img src={banniere} className="App-banniere" alt="banniere" width="200vh"/>
                    <h2 style={{
                        textAlign:"center"
                    }}>Association MIAGE Lille</h2>
                </div>
                <nav className="navigation">
                    <div className="lien">
                        <Link to="/presentation"
                        >
                            Accueil
                        </Link>
                    </div>
                    <div className="lien">
                        <Link
                              to="/formation"
                        >
                            La MIAGE
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/event"
                        >
                            Nos évènements
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/federation"
                        >
                            Nos fédérations
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/contact"
                        >
                            Contactez-nous !
                        </Link>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Header;