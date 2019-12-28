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
                <div>
                <nav className="navigation">
                    <div className="lien">
                        <Link to="/presentation"
                              style={{
                                  textDecoration :"none",
                              }}
                        >
                            Accueil
                        </Link>
                    </div>
                    <div className="lien">
                        <Link
                              to="/formation"
                              style={{
                                  textDecoration :"none",
                              }}
                        >
                            La MIAGE
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/event"
                              style={{
                                  textDecoration :"none",
                              }}
                        >
                            Evènements
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/federation"
                              style={{
                                  textDecoration :"none",
                              }}
                        >
                            Nos fédérations
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/contact"
                              style={{
                                  textDecoration :"none",
                              }}
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </nav>
                </div>
            </div>
        );
    }
}

export default Header;